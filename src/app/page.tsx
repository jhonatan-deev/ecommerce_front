import { listarProdutos } from '@/services/produtoService';
import { listarBanners } from '@/services/bannerService';
import PageContainer from '@/components/layout/PageContainer';
import BannerRow from '@/components/BannerRow';
import Vitrine from '@/components/Vitrine';

export default async function Home() {
  const [banners, { content: produtos }] = await Promise.all([
    listarBanners(),
    listarProdutos(),
  ]);

  const bannersOrdenados = [...banners].sort(
    (a, b) => a.ordem - b.ordem
  );

  const primeiroSlider = bannersOrdenados.slice(0, 3);
  const segundoSlider = bannersOrdenados.slice(3, 6);

  return (
    <PageContainer>
      <BannerRow banners={primeiroSlider} />

      <Vitrine
        titulo="Produtos em destaque"
        produtos={produtos.slice(0, 5)}
      />

      <Vitrine
        titulo="Mais vendidos"
        produtos={produtos.slice(5, 10)}
      />

      <BannerRow banners={segundoSlider} />

      <Vitrine
        titulo="Ofertas"
        produtos={produtos.slice(10, 15)}
      />
    </PageContainer>
  );
}