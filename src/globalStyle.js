import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    font-family: sans-serif;
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a {
    color: #337ab7;
    text-decoration: none;
  }
  p { 
    margin:0 
  }

  .home-button {
  }

  .card {
    img {
      max-width: 30%;
    }
    h3 {
      font-family: "Source Sans Pro", Arial, sans-serif;
    }
    p {
      font-family: "Roboto", Helvetica, serif;
      font-size: 0.8rem;
    }
  }

  .footer-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

`;

export default GlobalStyle;
