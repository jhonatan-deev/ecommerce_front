export type Categoria = {
  id: number;
  nome: string;
  descricao: string;
  ativo: boolean;
};

export type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  estoque: number;
  ativo: boolean;
  categoria: Categoria;
  imagemUrl: string;
};

export type PageResponse<T> = {
  content: T[];
  totalElements: number;
  totalPages: number;
  number: number;
  size: number;
};