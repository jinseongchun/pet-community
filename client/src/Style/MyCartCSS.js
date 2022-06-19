import styled from "@emotion/styled";

const CartForm = styled.div`
  margin: 0 auto;
  width: 1200px;
  height: auto;
  margin-top: 100px;
`;

const CartDiv = styled.div`
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }
`;

export { CartForm, CartDiv };
