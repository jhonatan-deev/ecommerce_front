import { PageResponse, Produto } from '@/types/produto';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function listarProdutos(page: number = 0): Promise<PageResponse<Produto>> {
  const response = await fetch(`${API_URL}/produtos?page=${page}`, {
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Erro ao buscar produtos');
  }

  return response.json();
}

export async function buscarProdutoPorId(id: string): Promise<Produto | null> {
  const response = await fetch(`${API_URL}/produtos/${id}`, {
    cache: 'no-store',
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error('Erro ao buscar produto');
  }

  return response.json();
}