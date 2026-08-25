import styled from 'styled-components';
import Link from 'next/link';
export const BannerSection = styled.section`
  background: linear-gradient(120deg, ${({ theme }) => theme.colors.primaryDark}, ${({ theme }) => theme.colors.primary});
  padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.lg};
`;

export const BannerContent = styled.div`
  max-width: 560px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Eyebrow = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.accent};
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  font-weight: 700;
  color: #ffffff;
  line-height: 1.15;
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: #ffffffd9;
`;

export const CtaLink = styled(Link)`
  margin-top: ${({ theme }) => theme.spacing.sm};
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #ffffff;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
  }
`;