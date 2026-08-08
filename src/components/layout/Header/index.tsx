'use client';

import Link from 'next/link';
import { HeaderContainer, Logo, Nav, NavLink, CartButton } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <Link href="/" passHref legacyBehavior>
        <Logo>MinhaLoja</Logo>
      </Link>

      <Nav>
        <Link href="/" passHref legacyBehavior>
          <NavLink>Início</NavLink>
        </Link>
        <Link href="/produtos" passHref legacyBehavior>
          <NavLink>Produtos</NavLink>
        </Link>
      </Nav>

      <CartButton>🛒 Carrinho</CartButton>
    </HeaderContainer>
  );
}