'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import PageContainer from '@/components/layout/PageContainer';
import CartItemRow from '@/components/CartItemRow';
import PaymentMethodSelector from '@/components/PaymentMethodSelector';
import CepField from '@/components/CepField';
import Button from '@/components/Button';
import { useCart } from '@/context/CartContext';
import { EnderecoEntrega, FormaPagamento } from '@/types/carrinho';
import {
  Layout, ItemsColumn, SummaryColumn, SummaryCard, SummaryRow,
  SummaryTotal, SectionTitle, EmptyState, ErrorText,
} from './styles';

const FRETE_FIXO = 14.9;
const FRETE_GRATIS_ACIMA_DE = 200;

export default function CarrinhoPage() {
  const router = useRouter();
  const { itens, subtotal, alterarQuantidade, removerProduto } = useCart();
  const [formaPagamento, setFormaPagamento] = useState<FormaPagamento | null>(null);
  const [endereco, setEndereco] = useState<EnderecoEntrega | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  const frete = itens.length === 0 ? 0 : subtotal >= FRETE_GRATIS_ACIMA_DE ? 0 : FRETE_FIXO;
  const total = subtotal + frete;

  function handleFinalizar() {
    setErro(null);
    if (itens.length === 0) {
      setErro('Seu carrinho está vazio.');
      return;
    }
    if (!formaPagamento) {
      setErro('Escolha uma forma de pagamento.');
      return;
    }
    if (!endereco) {
      setErro('Informe e consulte um CEP válido para entrega.');
      return;
    }

    // Ainda vamos criar a próxima parte (login + finalização) no próximo passo.
    // Por enquanto, isso valida os campos; o disparo pro login/pedido entra
    // junto com a tela de Login, senão ficaríamos com pontas soltas.
    console.log('Pronto pra finalizar:', { formaPagamento, endereco });
  }

  if (itens.length === 0) {
    return (
      <PageContainer>
        <h1>Carrinho</h1>
        <EmptyState>
          <p>Seu carrinho está vazio.</p>
          <Link href="/produtos">
            <Button>Ver produtos</Button>
          </Link>
        </EmptyState>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <h1>Carrinho</h1>
      <Layout>
        <ItemsColumn>
          {itens.map((item) => (
            <CartItemRow
              key={item.produto.id}
              item={item}
              onAlterarQuantidade={alterarQuantidade}
              onRemover={removerProduto}
            />
          ))}
        </ItemsColumn>

        <SummaryColumn>
          <SummaryCard>
            <SectionTitle>Entrega</SectionTitle>
            <CepField onEnderecoResolvido={setEndereco} />

            <SectionTitle>Pagamento</SectionTitle>
            <PaymentMethodSelector selecionado={formaPagamento} onSelecionar={setFormaPagamento} />

            <SummaryRow>
              <span>Subtotal</span>
              <span>R$ {subtotal.toFixed(2)}</span>
            </SummaryRow>
            <SummaryRow>
              <span>Frete</span>
              <span>{frete === 0 ? 'Grátis' : `R$ ${frete.toFixed(2)}`}</span>
            </SummaryRow>
            <SummaryTotal>
              <span>Total</span>
              <span>R$ {total.toFixed(2)}</span>
            </SummaryTotal>

            {erro && <ErrorText>{erro}</ErrorText>}

            <Button onClick={handleFinalizar} fullWidth>
              Finalizar compra
            </Button>
          </SummaryCard>
        </SummaryColumn>
      </Layout>
    </PageContainer>
  );
}