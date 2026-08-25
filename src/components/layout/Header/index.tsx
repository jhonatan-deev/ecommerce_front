'use client';

import { useCart } from '@/context/CartContext';
import { HeaderContainer, Logo, Nav, NavLink, CartLink, CartBadge, CartSubtotal } from './styles';

export default function Header() {
  const { totalItens, subtotal } = useCart();

  return (
    <HeaderContainer>
      <Logo href="/">MinhaLoja</Logo>

      <Nav>
        <NavLink href="/">Início</NavLink>
        <NavLink href="/produtos">Produtos</NavLink>
      </Nav>

      <CartLink href="/carrinho" aria-label="Ver carrinho">
        Carrinho
        {totalItens > 0 && (
          <>
            <CartBadge>{totalItens}</CartBadge>
            <CartSubtotal>R$ {subtotal.toFixed(2)}</CartSubtotal>
          </>
        )}
      </CartLink>
    </HeaderContainer>
  );
}