import { useState } from "react";
import type { Order } from "../../types/models/Order-model";
import { OrderModal } from "../OrderModal";
import { Board, OrderCard } from "./styles";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handlerOpenOrderModal(orderId: string) {
    setIsModalOpen(true);
    setSelectedOrder(orders.find((order) => order._id === orderId) || null);
  }

  function handlerCloseOrderModal() {
    setIsModalOpen(false);
    setSelectedOrder(null);
  }

  return (
    <Board>
      <OrderModal
        show={isModalOpen}
        order={selectedOrder}
        onClose={handlerCloseOrderModal}
      />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 ? (
        <>
          {orders.map((order) => (
            <OrderCard
              key={order._id}
              onClick={() => handlerOpenOrderModal(order._id)}
            >
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </OrderCard>
          ))}
        </>
      ) : null}
    </Board>
  );
}
