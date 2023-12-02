import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding:0;
    box-sizing:border-box;
    
}

body{
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
}
`;

export default GlobalStyle;
