'use client';

import { useEffect, useState } from 'react';
import { Banner } from '@/types/banner';
import {
  Container,
  Slider,
  Slide,
  Image,
  Arrow,
  Indicators,
  Indicator,
} from './styles';

type Props = {
  banners: Banner[];
};

export default function BannerRow({ banners }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (banners.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((current) =>
        current === banners.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [banners.length]);

  if (banners.length === 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrentIndex((current) =>
      current === banners.length - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((current) =>
      current === 0 ? banners.length - 1 : current - 1
    );
  };

  const currentBanner = banners[currentIndex];

  return (
    <Container>
      <Slider>
        <Slide>
          <Image
            src={currentBanner.imagemUrl}
            alt={currentBanner.titulo}
          />
        </Slide>

        {banners.length > 1 && (
          <>
            <Arrow
              type="button"
              onClick={previousSlide}
              aria-label="Banner anterior"
              className="previous"
            >
              ‹
            </Arrow>

            <Arrow
              type="button"
              onClick={nextSlide}
              aria-label="Próximo banner"
              className="next"
            >
              ›
            </Arrow>

            <Indicators>
              {banners.map((banner, index) => (
                <Indicator
                  key={banner.id}
                  type="button"
                  $active={index === currentIndex}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Ir para o banner ${index + 1}`}
                />
              ))}
            </Indicators>
          </>
        )}
      </Slider>
    </Container>
  );
}

