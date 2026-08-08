'use client';

import { Produto } from '@/types/produto';
import ProductCard from '@/components/ProductCard';
import { ProductsGrid } from './styles';

export default function ProductsList({ produtos }: { produtos: Produto[] }) {
  return (
    <ProductsGrid>
      {produtos.map((produto) => (
        <ProductCard key={produto.id} produto={produto} />
      ))}
    </ProductsGrid>
  );
}