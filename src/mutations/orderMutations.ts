import { gql } from "@apollo/client";
import { Order } from "../components/Checkout";

const ADD_ORDER = gql`
  mutation addOrder($order: OrderRequest) {
    addOrder(order: $order) {
      success
      orderNumber
      error
      errorItem
      errorMsg
    }
  }
`;

export { ADD_ORDER };
