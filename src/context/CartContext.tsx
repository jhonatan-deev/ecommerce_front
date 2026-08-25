'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Produto } from '@/types/produto';
import { ItemCarrinho } from '@/types/itemCarrinho';

const STORAGE_KEY = 'minhaloja:carrinho';

type CartContextValue = {
  itens: ItemCarrinho[];
  totalItens: number;
  subtotal: number;
  adicionarProduto: (produto: Produto, quantidade?: number) => void;
  alterarQuantidade: (produtoId: number, quantidade: number) => void;
  removerProduto: (produtoId: number) => void;
  limparCarrinho: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [itens, setItens] = useState<ItemCarrinho[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    try {
      const salvo = window.localStorage.getItem(STORAGE_KEY);
      if (salvo) {
        setItens(JSON.parse(salvo));
      }
    } catch {
      // localStorage indisponível ou dado corrompido — segue com carrinho vazio
    } finally {
      setCarregado(true);
    }
  }, []);

  useEffect(() => {
    if (!carregado) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(itens));
  }, [itens, carregado]);

  function adicionarProduto(produto: Produto, quantidade: number = 1) {
    setItens((atual) => {
      const existente = atual.find((item) => item.produto.id === produto.id);
      if (existente) {
        return atual.map((item) =>
          item.produto.id === produto.id
            ? { ...item, quantidade: item.quantidade + quantidade }
            : item
        );
      }
      return [...atual, { produto, quantidade }];
    });
  }

  function alterarQuantidade(produtoId: number, quantidade: number) {
    if (quantidade < 1) {
      removerProduto(produtoId);
      return;
    }
    setItens((atual) =>
      atual.map((item) =>
        item.produto.id === produtoId ? { ...item, quantidade } : item
      )
    );
  }

  function removerProduto(produtoId: number) {
    setItens((atual) => atual.filter((item) => item.produto.id !== produtoId));
  }

  function limparCarrinho() {
    setItens([]);
  }

  const totalItens = useMemo(
    () => itens.reduce((acc, item) => acc + item.quantidade, 0),
    [itens]
  );

  const subtotal = useMemo(
    () => itens.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0),
    [itens]
  );

  return (
    <CartContext.Provider
      value={{
        itens,
        totalItens,
        subtotal,
        adicionarProduto,
        alterarQuantidade,
        removerProduto,
        limparCarrinho,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart precisa ser usado dentro de um CartProvider');
  }
  return context;
}