'use client'
import { BannerSection, BannerContent, Eyebrow, Title, Subtitle, CtaLink } from './styles';

export default function Banner() {
  return (
    <BannerSection>
      <BannerContent>
        <Eyebrow>Novidades toda semana</Eyebrow>
        <Title>Tudo o que você precisa, direto na sua porta</Title>
        <Subtitle>Ofertas selecionadas com entrega rápida.</Subtitle>
        <CtaLink href="/produtos">Ver produtos</CtaLink>
      </BannerContent>
    </BannerSection>
  );
}