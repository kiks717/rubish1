import { createGlobalStyle } from "styled-components";
 const GlobalStyles = createGlobalStyle`
    body {
    margin: 0;
    padding: 0;
    font-family: 'Cormorant Garamond', sans-serif;
    background-color: ${({theme}) => theme.colors.body};
    }
    *{
        box-sizing: border-box;
    }


`
export default GlobalStyles