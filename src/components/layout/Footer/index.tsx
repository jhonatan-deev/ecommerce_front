'use client';

import { FooterContainer } from './styles';

export default function Footer() {
  return (
    <FooterContainer>
      © {new Date().getFullYear()} MinhaLoja. Todos os direitos reservados.
    </FooterContainer>
  );
}