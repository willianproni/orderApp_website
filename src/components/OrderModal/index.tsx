import closeIcon from "../../assets/images/close-icon.svg";
import type { Order } from "../../types/models/Order-model";
import { Actions, Content, ItemDetails, OrderDetails, Overlay } from "./styles";

interface OrderModalProps {
  show: boolean;
  order: Order | null;
  onClose: () => void;
}

export function OrderModal({ show, order, onClose }: OrderModalProps) {
  if (!show || !order) return null;

  const price = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <Overlay onClick={onClose}>
      <Content>
        <header>
          <strong>Mesa {order?.table}</strong>
          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Icone para fechar modal de pedido" />
          </button>
        </header>

        <div className="status">
          <small>status do pedido</small>
          <div>
            <span>
              {order?.status === "WAITING"
                ? "⏱️"
                : order?.status === "IN_PRODUCTION"
                  ? "👨‍🍳"
                  : "✅"}
            </span>
            <strong>
              {order?.status === "WAITING"
                ? "Fila de espera"
                : order?.status === "IN_PRODUCTION"
                  ? "Em produção"
                  : "Pronto!"}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, quantity, product }) => (
              <ItemDetails key={_id}>
                <img
                  src={`http://localhost:3001/uploads/${product.imagePath}`}
                  alt={product.name}
                  width={62}
                  height={42}
                />
                <span className="quantity">{quantity}x</span>

                <div className="details">
                  <strong>{product.name}</strong>
                  <span>{price.format(product.price)}</span>
                </div>
              </ItemDetails>
            ))}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>
              {price.format(
                order.products.reduce(
                  (total, { product, quantity }) =>
                    total + product.price * quantity,
                  0,
                ),
              )}
            </strong>
          </div>
        </OrderDetails>

        <Actions>
          <button type="button" className="secondary">
            <strong>Cancelar pedido</strong>
          </button>
          <button type="button" className="primary">
            <span>
              {order?.status === "WAITING" ? "Iniciar produção" : "Pronto!"}
            </span>
          </button>
        </Actions>
      </Content>
    </Overlay>
  );
}
