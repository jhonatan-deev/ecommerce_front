import { listarProdutos } from '@/services/produtoService';
import ProductsList from '@/components/ProductsList';

type ProdutosPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function ProdutosPage({ searchParams }: ProdutosPageProps) {
  const { page } = await searchParams;
  const pageNumber = page ? Number(page) : 0;

  const { content: produtos } = await listarProdutos(pageNumber);

  return (
    <div>
      <h1>Nossos Produtos</h1>
      <ProductsList produtos={produtos} />
    </div>
  );
}