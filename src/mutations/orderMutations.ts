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

export { ADD_ORDER };
