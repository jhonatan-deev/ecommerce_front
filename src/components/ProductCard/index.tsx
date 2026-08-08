import { Produto } from '@/types/produto';
import { Card, ImageWrapper, ProductImage, Placeholder, Info, Name, Price } from './styles';

export default function ProductCard({ produto }: { produto: Produto }) {
  return (
    <Card>
      <ImageWrapper>
        {produto.imagemUrl ? (
          <ProductImage src={produto.imagemUrl} alt={produto.nome} />
        ) : (
          <Placeholder>Sem imagem</Placeholder>
        )}
      </ImageWrapper>
      <Info>
        <Name>{produto.nome}</Name>
        <Price>R$ {produto.preco.toFixed(2)}</Price>
      </Info>
    </Card>
  );
}