import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Option = styled.button<{ $selecionado: boolean }>`
  text-align: left;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  background-color: ${({ theme, $selecionado }) =>
    $selecionado ? theme.colors.primaryLight : theme.colors.background};
  border: 2px solid
    ${({ theme, $selecionado }) => ($selecionado ? theme.colors.primary : theme.colors.border)};
  transition: border-color 0.2s, background-color 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const OptionLabel = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const OptionHint = styled.p`
  margin-top: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.textLight};
`;