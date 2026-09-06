import { Banner } from '@/types/banner';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function listarBanners(): Promise<Banner[]> {
  const response = await fetch(`${API_URL}/banners`, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error('Erro ao buscar banners');
  }

  return response.json();
}