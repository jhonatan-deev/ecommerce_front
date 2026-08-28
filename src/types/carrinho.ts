import { Produto } from './produto';

export type ItemCarrinho = {
  produto: Produto;
  quantidade: number;
};

export type EnderecoEntrega = {
  cep: string;
  logradouro: string;
  bairro: string;
  cidade: string;
  uf: string;
};

export type FormaPagamento = 'CARTAO' | 'PIX' | 'BOLETO';