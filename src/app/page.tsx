import { listarProdutos } from '@/services/produtoService';
import ProductsList from '@/components/ProductsList';
import PageContainer from '@/components/layout/PageContainer';
import Banner from '@/components/Banner';

export default async function Home() {
  const { content: produtos } = await listarProdutos();

  return (
    <>
      <Banner />
      <PageContainer>
        <h2>Mais vendidos</h2>
        <ProductsList produtos={produtos} />
      </PageContainer>
    </>
  );
}