export const theme = {
  colors: {
    primary: '#0070f3',
    primaryDark: '#0051a8',
    secondary: '#ff6b35',
    background: '#ffffff',
    surface: '#f5f5f5',
    text: '#1a1a1a',
    textLight: '#666666',
    border: '#e0e0e0',
    success: '#00b37e',
    danger: '#e63946',
  },
  fonts: {
    body: 'Arial, Helvetica, sans-serif',
  },
  fontSizes: {
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '28px',
    xxl: '36px',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
  },
};

export type Theme = typeof theme;