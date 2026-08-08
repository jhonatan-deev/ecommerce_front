import { listarProdutos } from '@/services/produtoService';
import ProductsList from '@/components/ProductsList';
import Pagination from '@/components/Pagination';
import PageContainer from '@/components/layout/PageContainer';

type ProdutosPageProps = {
  searchParams: Promise<{ page?: string }>;
};

export default async function ProdutosPage({ searchParams }: ProdutosPageProps) {
  const { page } = await searchParams;
  const pageNumber = page ? Number(page) : 0;

  const { content: produtos, totalPages, number } = await listarProdutos(pageNumber);

  return (
    <PageContainer>
      <h1>Nossos Produtos</h1>
      <ProductsList produtos={produtos} />
      <Pagination currentPage={number} totalPages={totalPages} />
    </PageContainer>
  );
}