import { EnderecoEntrega } from '@/types/carrinho';

// Serviço fictício: não consulta nenhuma API de CEP real.
// Gera um endereço de exemplo a partir do próprio CEP, só pra preencher a tela.
const BAIRROS = ['Centro', 'Jardim das Flores', 'Vila Nova', 'Boa Vista', 'Alto da Serra'];
const CIDADES: Array<{ cidade: string; uf: string }> = [
  { cidade: 'Brasília', uf: 'DF' },
  { cidade: 'São Paulo', uf: 'SP' },
  { cidade: 'Belo Horizonte', uf: 'MG' },
  { cidade: 'Curitiba', uf: 'PR' },
];

export function cepValido(cep: string): boolean {
  return /^\d{5}-?\d{3}$/.test(cep);
}

export async function consultarCepFicticio(cep: string): Promise<EnderecoEntrega> {
  const digitos = cep.replace(/\D/g, '');
  await new Promise((resolve) => setTimeout(resolve, 500)); // simula latência de rede

  const seed = Number(digitos.slice(0, 3)) || 0;
  const { cidade, uf } = CIDADES[seed % CIDADES.length];
  const bairro = BAIRROS[seed % BAIRROS.length];

  return {
    cep: digitos,
    logradouro: `Rua Exemplo, ${Number(digitos.slice(3)) || 100}`,
    bairro,
    cidade,
    uf,
  };
}