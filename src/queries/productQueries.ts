import { gql } from "@apollo/client";

const GET_ITEMS_BY_DEPT = gql`
  query getProductsByDept($dept: Departments) {
    getProductsByDept(dept: $dept) {
      searchName
      name
      price
      img_id
    }
  }
`;

const GET_ITEM = gql`
  query product($searchName: String, $SKU: Int) {
    product(searchName: $searchName, SKU: $SKU) {
      SKU
      searchName
      name
      price
      description
      img_id
      stock_level
    }
  }
`;

export { GET_ITEMS_BY_DEPT, GET_ITEM };
