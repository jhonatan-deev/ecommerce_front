'use client';

import { ItemCarrinho } from '@/types/carrinho';
import { Row, Thumb, Placeholder, Info, Name, UnitPrice,
     Quantity, QtyButton, LineTotal, RemoveButton } from './styles';

type Props = {
  item: ItemCarrinho;
  onAlterarQuantidade: (produtoId: number, quantidade: number) => void;
  onRemover: (produtoId: number) => void;
};

export default function CartItemRow({ item, onAlterarQuantidade, onRemover }: Props) {
  const { produto, quantidade } = item;
  const totalLinha = produto.preco * quantidade;

  return (
    <Row>
      <Thumb>
        {produto.imagemUrl ? (
          <img src={produto.imagemUrl} alt={produto.nome} />
        ) : (
          <Placeholder>Sem imagem</Placeholder>
        )}
      </Thumb>

      <Info>
        <Name>{produto.nome}</Name>
        <UnitPrice>R$ {produto.preco.toFixed(2)} / un.</UnitPrice>
      </Info>

      <Quantity>
        <QtyButton type="button" onClick={() => onAlterarQuantidade(produto.id, quantidade - 1)} aria-label="Diminuir quantidade">
          −
        </QtyButton>
        <span>{quantidade}</span>
        <QtyButton type="button" onClick={() => onAlterarQuantidade(produto.id, quantidade + 1)} aria-label="Aumentar quantidade">
          +
        </QtyButton>
      </Quantity>

      <LineTotal>R$ {totalLinha.toFixed(2)}</LineTotal>

      <RemoveButton type="button" onClick={() => onRemover(produto.id)} aria-label="Remover item">
        Remover
      </RemoveButton>
    </Row>
  );
}