'use client';

import { Produto } from '@/types/produto';
import ProductCard from '@/components/ProductCard';
import { Section, Title, Scroll } from './styles';

type Props = {
  titulo: string;
  produtos: Produto[];
};

export default function Vitrine({ titulo, produtos }: Props) {
  if (produtos.length === 0) {
    return null;
  }

  return (
    <Section>
      <Title>{titulo}</Title>
      <Scroll>
        {produtos.map((produto) => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </Scroll>
    </Section>
  );
}