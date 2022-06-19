import styled from "@emotion/styled";

const UploadDiv = styled.div`
  width: 100%;
  margin-top: 5rem;
  height: auto;
  margin-bottom: 1rem;
`;

const UploadForm = styled.form`
  width: 1200px;
  background: #ffc000;
  padding: 30px;
  border-radius: 15px;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  #title {
    border: 1px solid #c6c6c6;
    padding: 10px;
    margin-bottom: 10px;

    &:active,
    &:focus {
      outline: none;
    }
  }
  textarea {
    min-height: 350px;
    resize: none;
    border: 1px solid #c6c6c6;
    padding: 10px;
    &:active,
    &:focus {
      outline: none;
    }
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: grey;
      border-radius: 15px;
      background-colip: padding-box;
      broder: 2px solid transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: #c6c6c6;
      border-radius: 15px;
      box-shadow: inset 0px 0px 5px whitesmoke;
    }
  }
  label {
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 10px;
    color: white;
  }
  @media (max-width: 756px) {
    width: 90%;
  }
`;

const UploadTitleDiv = styled.div`
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;
const UploadButtonDiv = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  button {
    border-radius: 15px;
    border-color: black;
    padding: 5px 10px;
    background-color: white;
    font-weight: bold;
    &:hover {
      background-color: blue;
      color: white;
    }
    &:nth-last-of-type(1) {
      margin-left: 10px;
    }
  }
`;

export { UploadDiv, UploadForm, UploadTitleDiv, UploadButtonDiv };
