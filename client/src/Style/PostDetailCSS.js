import styled from "@emotion/styled";

const PostDiv = styled.div`
  padding-top: 5rem;
  padding-bottom: 1rem;
  max-width: 756px;
  margin: 0 auto !important;
  @media (max-width: 756px) {
    width: 90%;
  }
`;

const SpinnerDiv = styled.div`
  width: 100%;
  height: calc(100vh - 2rem);
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`;

const Post = styled.div`
  width: 100%;
  height: auto;
  background: #ffc000;
  padding: 30px;
  border-radius: 15px;

  h1 {
    font-weight: bold;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
  }
  p {
    margin-bottom: 0px;
  }
  .content {
    margin-top: 20px;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
  }
  .author {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    p {
      margin-bottom: 0px;
      margin-left: 10px;
      &.time {
        font-size: 10px;
      }
      &.admin {
        display: flex;
        align-items: center;
      }
    }
    @media (max-width: 756px) {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
  button {
    border-radius: 15px;
    padding: 5px 10px;
    font-weight: bold;
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
  }
`;

export { PostDiv, SpinnerDiv, Post, BtnDiv };
