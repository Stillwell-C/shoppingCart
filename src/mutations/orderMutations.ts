import { gql } from "@apollo/client";
import { Order } from "../components/Checkout";

const ADD_ORDER = gql`
  mutation addOrder($orderInfo: [OrderItem!]!, $userInfo: UserInfo!) {
    addOrder(orderInfo: $orderInfo, userInfo: $userInfo) {
      success
      orderNumber
      error
      errorItem
      errorMsg
    }
  }
`;

export { ADD_ORDER };
