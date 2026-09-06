import styled from 'styled-components';

export const Section = styled.section`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Scroll = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  overflow-x: auto;
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  scroll-snap-type: x mandatory;

  > * {
    flex: 0 0 220px;
    scroll-snap-align: start;
  }
`;