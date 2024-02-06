import { gql } from "@apollo/client";

const GET_ITEMS_BY_DEPT = gql`
  query GetProductsByDept($dept: AllowedDepartments) {
    getProductsByDept(dept: $dept) {
      SKU
      searchName
      price
      description
      dept
      img_id
    }
  }
`;

const GET_ITEMS_BY_SEARCHNAME = gql`
  query GetProductBySearchName($searchName: String!) {
    getProductBySearchName(searchName: $searchName) {
      SKU
      name
      price
      description
      dept
      img_id
    }
  }
`;

export { GET_ITEMS_BY_DEPT, GET_ITEMS_BY_SEARCHNAME };
