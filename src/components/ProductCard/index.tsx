'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Produto } from '@/types/produto';
import { useCart } from '@/context/CartContext';
import {
  Card,
  ImageWrapper,
  ProductImage,
  Placeholder,
  Info,
  Name,
  Price,
  Actions,
  QtyStepper,
  QtyButton,
  QtyValue,
  AddButton,
} from './styles';

export default function ProductCard({ produto }: { produto: Produto }) {
  const { adicionarProduto } = useCart();
  const [quantidade, setQuantidade] = useState(1);

  function handleAdicionar() {
    adicionarProduto(produto, quantidade);
    setQuantidade(1);
  }

  const semEstoque = produto.estoque === 0;

  return (
    <Card>
      <Link href={`/produtos/${produto.id}`}>
        <ImageWrapper>
          {produto.imagemUrl ? (
            <ProductImage src={produto.imagemUrl} alt={produto.nome} />
          ) : (
            <Placeholder>Sem imagem</Placeholder>
          )}
        </ImageWrapper>
        <Info>
          <Name>{produto.nome}</Name>
          <Price>R$ {produto.preco.toFixed(2)}</Price>
        </Info>
      </Link>

      <Actions>
        <QtyStepper>
          <QtyButton
            type="button"
            onClick={() => setQuantidade((q) => Math.max(1, q - 1))}
            disabled={semEstoque}
            aria-label="Diminuir quantidade"
          >
            −
          </QtyButton>
          <QtyValue>{quantidade}</QtyValue>
          <QtyButton
            type="button"
            onClick={() => setQuantidade((q) => q + 1)}
            disabled={semEstoque}
            aria-label="Aumentar quantidade"
          >
            +
          </QtyButton>
        </QtyStepper>

        <AddButton type="button" onClick={handleAdicionar} disabled={semEstoque}>
          {semEstoque ? 'Sem estoque' : `Adicionar · R$ ${(produto.preco * quantidade).toFixed(2)}`}
        </AddButton>
      </Actions>
    </Card>
  );
}