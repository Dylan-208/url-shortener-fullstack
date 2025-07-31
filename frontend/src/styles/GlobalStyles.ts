import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    
}

body {
    background-image: url('/fundo_url_short.png')

}
`;

export const Cover = styled.div`
  display: flex;
  max-height: 100%;
  max-width: 100%;
`;

export const Content = styled.div`
  display: flex;
  margin: auto auto;
  max-height: 600px;
  max-width: 1000px;
  border-radius: 10px;
  flex-direction: column;
  padding: 0 10px;

  h1 {
    display: flex;
    font-family: "Roboto";
    letter-spacing: -1px;
    justify-content: center;
    align-items: center;
    height: 40%;
    font-size: 40px;
    gap: 10px;
    img {
      height: auto;
      width: 100px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    padding: 10px 10px;
    max-height: 200px;
    width: 100%;
    background-color: white;
    border-radius: 40px;
    font-family: "Roboto";
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);

    label {
      display: flex;
      align-items: center;
      height: 60px;
      margin-left: 20px;
      font-size: 20px;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
      position: relative;
      width: 100%;
      box-shadow: none;
      height: 80px;

      form {
        height: 80px;
        margin-top: 10px;

        input {
          border-radius: 40px;
          padding: 0px 20px;
          border: 2px solid #ababb8ff;
          background-color: #f8f8f8;
          height: 70px;
          z-index: 1;
          position: relative;
          width: 100%;
          font-size: 15px;
        }

        button {
          height: 70px;
          border: none;
          font-weight: 700;
          background-color: black;
          color: white;
          border-radius: 40px;
          position: absolute;
          box-sizing: border-box;
          width: 200px;
          right: 0px;
          z-index: 2;
          font-size: 20px;
          font-family: "Roboto";
          cursor: pointer;
        }
      }
    }

    p {
      margin-left: 40px;
      height: 60px;
      color: red;
    }
  }
`;

export const Response = styled.div`
  display: flex;

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    border-radius: 20px;
    padding: 0px 20px;
    border: 2px solid #ababb8ff;
    background-color: #f8f8f8;
    height: 70px;
    z-index: 1;
    position: relative;
    width: 100%;
    font-size: 20px;
    color: blue;
  }

  button {
    height: 70px;
    border: none;
    background-color: #81c9fa;
    font-weight: 700;
    color: white;
    border-radius: 40px;
    position: absolute;
    box-sizing: border-box;
    width: 200px;
    right: 0px;
    z-index: 2;
    font-size: 20px;
    font-family: "Roboto";
    cursor: pointer;
  }
`;
