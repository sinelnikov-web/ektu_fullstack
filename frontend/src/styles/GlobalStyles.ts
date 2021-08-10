import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --toolbar-bg-color: rgb(35,57,66);
    --white-color: #fff;
  }
  
  *, *:before, *:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
  }
  html {
    font-size: 10px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`