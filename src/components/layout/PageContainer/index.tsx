'use client'
import { Container } from './styles';

export default function PageContainer({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}