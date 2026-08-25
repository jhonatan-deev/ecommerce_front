export const theme = {
  colors: {
    primary: '#E30613',
    primaryDark: '#B10510',
    primaryLight: '#FDEAEA',
    secondary: '#2E7D32',
    secondaryDark: '#1E5D22',
    accent: '#FFB800',
    background: '#FFFFFF',
    surface: '#F7F6F4',
    text: '#1A1A1A',
    textLight: '#6B6B6B',
    textOnPrimary: '#FFFFFF',
    border: '#E7E5E1',
    success: '#2E7D32',
    danger: '#E63946',
  },
  fonts: {
    heading: 'var(--font-heading), Arial, Helvetica, sans-serif',
    body: 'var(--font-body), Arial, Helvetica, sans-serif',
  },
  fontSizes: { xs: '12px', sm: '14px', md: '16px', lg: '20px', xl: '28px', xxl: '36px' },
  spacing: { xs: '4px', sm: '8px', md: '16px', lg: '24px', xl: '32px', xxl: '48px' },
  borderRadius: { sm: '4px', md: '8px', lg: '16px', pill: '999px' },
  breakpoints: { mobile: '480px', tablet: '768px', desktop: '1024px' },
};

export type Theme = typeof theme;