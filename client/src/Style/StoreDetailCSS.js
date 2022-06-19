import styled from "@emotion/styled";

const StoreDiv = styled.div`
  padding-top: 5rem;
  padding-bottom: 1rem;
  max-width: 1000px;
  margin: 0 auto !important;
  @media (max-width: 1000px) {
    width: 90%;
  }
`;

const ProductDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const StoreImage = styled.div`
  width: 40%;
`;

const StoreContent = styled.div`
  background-color: #ffc000;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  padding: 10px;
  h2,
  p {
    background-color: white;
  }
`;

const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  button {
    border-radius: 15px;
    padding: 5px 10px;
    font-weight: bold;
    margin-top: 50px;
    &.edit {
      background-color: white;
      color: black;
      border: 1px solid black;
      &:hover {
        background-color: blue;
        color: white;
      }
    }
    &.delete {
      margin-left: 10px;
      background-color: white;
      color: black;
      border: 1px solid black;
      &:hover {
        background-color: red;
        color: white;
      }
    }
    &.cart {
      background-color: #ffc000;
      color: white;
      border: 1px solid #ffc000;
      &:hover {
        background-color: white;
        color: #ffc000;
        border: 1px solid #ffc000;
      }
    }
  }
`;

export { StoreDiv, ProductDiv, StoreImage, StoreContent, BtnDiv };
