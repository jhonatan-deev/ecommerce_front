import { PageResponse, Produto } from '@/types/produto';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function listarProdutos(): Promise<PageResponse<Produto>> {
  const response = await fetch(`${API_URL}/produtos`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Erro ao buscar produtos');
  }

  return response.json();
}