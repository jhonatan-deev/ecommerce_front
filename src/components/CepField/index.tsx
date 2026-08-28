'use client';

import { useState } from 'react';
import { EnderecoEntrega } from '@/types/carrinho';
import { cepValido, consultarCepFicticio } from '@/services/cepService';
import { Wrapper, Row, Input,
     ConsultButton, ErrorText, AddressCard, AddressLine } from './styles';

type Props = {
  onEnderecoResolvido: (endereco: EnderecoEntrega | null) => void;
};

export default function CepField({ onEnderecoResolvido }: Props) {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState<EnderecoEntrega | null>(null);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  async function handleConsultar() {
    if (!cepValido(cep)) {
      setErro('Informe um CEP válido, ex: 70000-000');
      setEndereco(null);
      onEnderecoResolvido(null);
      return;
    }

    setErro(null);
    setCarregando(true);
    try {
      const resultado = await consultarCepFicticio(cep);
      setEndereco(resultado);
      onEnderecoResolvido(resultado);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <Wrapper>
      <Row>
        <Input
          value={cep}
          onChange={(event) => setCep(event.target.value)}
          placeholder="00000-000"
          maxLength={9}
          aria-label="CEP"
        />
        <ConsultButton type="button" onClick={handleConsultar} disabled={carregando}>
          {carregando ? 'Consultando...' : 'Consultar CEP'}
        </ConsultButton>
      </Row>
      {erro && <ErrorText>{erro}</ErrorText>}
      {endereco && (
        <AddressCard>
          <AddressLine>{endereco.logradouro}</AddressLine>
          <AddressLine>{endereco.bairro} — {endereco.cidade}/{endereco.uf}</AddressLine>
        </AddressCard>
      )}
    </Wrapper>
  );
}