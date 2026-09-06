export type Banner = {
  id: number;
  titulo: string;
  imagemUrl: string;
  ordem: number;
  ativo: boolean;
  categoriaId: number | null;
  categoriaNome: string | null;
};