import { gql } from "@apollo/client";

const ADD_ORDER = gql`
  mutation addOrder(
    $orderInfo: [OrderItem!]!
    $userInfo: UserInfo!
    $orderTotal: Float!
  ) {
    addOrder(
      orderInfo: $orderInfo
      userInfo: $userInfo
      orderTotal: $orderTotal
    ) {
      success
      orderNumber
      error
      errorItem
      errorMsg
    }
  }
`;

const DELETE_ORDER = gql`
  mutation deleteOrder($id: String!) {
    deleteOrder(id: $id) {
      id
    }
  }
`;

export { ADD_ORDER, DELETE_ORDER };
