import styled from "styled-components";

export const Container = styled.div`
  background-color: azure;
  width: 100vw;
  height: 500px;
  display: flex;
  justify-content: center;
`;

export const Cadastro = styled.div`
    width: 52vw;
    display: flex;
    flex-direction: column;

    input,button {
      padding: 10px;
      margin-top: 20px;
    }

    button {
      background-color:#a791d9;
      color: #fff;
      border: none;
      border-radius: 3px;
    }
`;

export const Table = styled.div`
  border-spacing: 0 0.5rem;

  th {
    color: #202024;
    font-weight: 600;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }
  td {
    padding: 1rem 2rem;
    border:0;
    background-color: #202024;
    color: #fff;
  }
`