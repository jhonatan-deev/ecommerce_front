'use client';

import { FormaPagamento } from '@/types/carrinho';
import { Grid, Option, OptionLabel, OptionHint } from './styles';

const OPCOES: Array<{ valor: FormaPagamento; label: string; hint: string }> = [
  { valor: 'CARTAO', label: 'Cartão de crédito', hint: 'Simulado — nenhum dado é enviado' },
  { valor: 'PIX', label: 'Pix', hint: 'Simulado — sem QR code real' },
  { valor: 'BOLETO', label: 'Boleto', hint: 'Simulado — vencimento em 3 dias úteis' },
];

type Props = {
  selecionado: FormaPagamento | null;
  onSelecionar: (valor: FormaPagamento) => void;
};

export default function PaymentMethodSelector({ selecionado, onSelecionar }: Props) {
  return (
    <Grid role="radiogroup" aria-label="Forma de pagamento">
      {OPCOES.map((opcao) => (
        <Option
          key={opcao.valor}
          type="button"
          $selecionado={selecionado === opcao.valor}
          onClick={() => onSelecionar(opcao.valor)}
          role="radio"
          aria-checked={selecionado === opcao.valor}
        >
          <OptionLabel>{opcao.label}</OptionLabel>
          <OptionHint>{opcao.hint}</OptionHint>
        </Option>
      ))}
    </Grid>
  );
}