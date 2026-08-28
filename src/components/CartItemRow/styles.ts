import styled from 'styled-components';

export const Row = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr auto auto auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 56px 1fr;
    grid-template-areas:
      'thumb info'
      'thumb qty'
      'thumb total'
      '. remove';
    row-gap: ${({ theme }) => theme.spacing.xs};
  }
`;

export const Thumb = styled.div`
  width: 64px;
  height: 64px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Placeholder = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
`;

export const Info = styled.div``;

export const Name = styled.p`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

export const UnitPrice = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-weight: 600;
`;

export const QtyButton = styled.button`
  width: 28px;
  height: 28px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.md};
  line-height: 1;

  &:hover {
    border-color: ${({ theme }) => theme.colors.text};
  }
`;

export const LineTotal = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  white-space: nowrap;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;