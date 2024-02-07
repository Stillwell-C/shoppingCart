import { gql } from "@apollo/client";

const GET_ITEMS_BY_DEPT = gql`
  query getProductsByDept($dept: AllowedDepartments) {
    getProductsByDept(dept: $dept) {
      searchName
      name
      price
      img_id
    }
  }
`;

const GET_ITEMS_BY_SEARCHNAME = gql`
  query getProductBySearchName($searchName: String!) {
    getProductBySearchName(searchName: $searchName) {
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

export { GET_ITEMS_BY_DEPT, GET_ITEMS_BY_SEARCHNAME };
