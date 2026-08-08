import { listarProdutos } from '@/services/produtoService';
import ProductCard from '@/components/ProductCard';

export default async function Home() {
  const { content: produtos } = await listarProdutos();

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '16px',
        padding: '16px',
      }}
    >
      {produtos.map((produto) => (
        <ProductCard key={produto.id} produto={produto} />
      ))}
    </div>
  );
}