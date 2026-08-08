import { listarProdutos } from '@/services/produtoService';
import ProductsList from '@/components/ProductsList';
import PageContainer from '@/components/layout/PageContainer';

export default async function Home() {
  const { content: produtos } = await listarProdutos();

  return (
    <PageContainer>
      <h1>Produtos</h1>
      <ProductsList produtos={produtos} />
    </PageContainer>
  );
}