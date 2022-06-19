import styled from "@emotion/styled";

const LoginTitleDiv = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const LoginDiv = styled.div`
  width: 50%;
  max-width: 360px;
  margin: 0 auto;
  margin-top: 5rem;
  form {
    width: 70%;
    padding: 20px;
    background-color: #ffc000;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    label {
      font-weight: bold;
    }
    input {
      border-radius: 10px;
      border: 1px solid #c6c6c6;
      padding: 5px;
      margin-bottom: 10px;

      &:active,
      &:focus {
        outline: none;
      }
    }
    button {
      border-radius: 15px;
      padding: 5px 10px;
      background-color: white;
      border: 1px solid black;
      margin-top: 10px;
      &:hover {
        background-color: #ffa000;
        color: black;
        border: 1px solid #ffa000;
      }
    }
    @media (max-width: 756px) {
      width: 100%;
    }
  }
  @media (max-width: 756px) {
    width: 90%;
    margin-top: 3rem;
  }
`;

const MyPageDiv = styled.div`
  margin-top: 100px;
  width: 100vw;
  height: 100vh;
  form {
    margin-top: 2rem;
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      margin-bottom: 2rem;
      input {
        display: none;
      }
    }
    button {
      border-radius: 15px;
      padding: 5px 10px;
      background-color: white;
      border: 1px solid black;
      margin-top: 10px;
      &:hover {
        background-color: #ffa000;
        color: black;
        border: 1px solid #ffa000;
      }
    }
  }
`;

export { LoginTitleDiv, LoginDiv, MyPageDiv };
