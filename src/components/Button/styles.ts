import styled, { css } from 'styled-components';

type StyledButtonProps = {
  $variant: 'primary' | 'secondary' | 'outline';
  $fullWidth: boolean;
};

const variants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: #ffffff;
    border: 1px solid transparent;

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.secondaryDark};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    border: 1px solid transparent;

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};

    &:hover:not(:disabled) {
      border-color: ${({ theme }) => theme.colors.text};
    }
  `,
};

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ $variant }) => variants[$variant]}
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s, opacity 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;