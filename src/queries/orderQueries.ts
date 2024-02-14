import { gql } from "@apollo/client";

const GET_ORDER = gql`
  query order($orderID: String!) {
    order(orderID: $orderID) {
      id
      createdAt
      orderStatus
      orderTotal
      orderItems {
        id
        searchName
        qty
        price
        Product {
          name
          img_id
        }
      }
    }
  }
`;

export { GET_ORDER };
