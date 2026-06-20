import type { Order } from "../../types/models/Order-model";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const orders: Order[] = [
  {
    _id: "6a33cb44af7727e9c973afd1",
    table: "2",
    status: "WAITING",
    products: [
      {
        product: {
          _id: "6a2930028c0fda8f2e7b791a1",
          name: "Pizza 4 queijos",
          imagePath: "1781084162147-pizza-4-queijos.jpg",
          price: 80,
        },
        quantity: 3,
        _id: "6a33cb44af7727e9c973afd2",
      },
      {
        product: {
          _id: "6a2930028c0fd8f2ec7b791a1",
          name: "Pizza 4 queijos",
          imagePath: "1781084162147-pizza-4-queijos.jpg",
          price: 80,
        },
        quantity: 3,
        _id: "6a3a3cb44af7727e9c973afd2",
      },
    ],
  },
  {
    _id: "6a33cb44acf7727e9c973afd1",
    table: "3",
    status: "WAITING",
    products: [
      {
        product: {
          _id: "6a2930028c02fd8f2e7b791a1",
          name: "Pizza 4 queijos",
          imagePath: "1781084162147-pizza-4-queijos.jpg",
          price: 80,
        },
        quantity: 3,
        _id: "6a33cbd44af7727e9c973afd2",
      },
    ],
  },
  {
    _id: "6a33cb44af7727e9c973bfd1",
    table: "4",
    status: "WAITING",
    products: [
      {
        product: {
          _id: "6a2930028c0fd834f2e7b791a1",
          name: "Pizza 4 queijos",
          imagePath: "1781084162147-pizza-4-queijos.jpg",
          price: 80,
        },
        quantity: 3,
        _id: "6a33cb344af7727e9c973afd2",
      },
    ],
  },
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="⏱️" title="Fila de espera" orders={orders} />

      <OrdersBoard icon="👨‍🍳" title="Em produção" orders={[]} />

      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </Container>
  );
}
