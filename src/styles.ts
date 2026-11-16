import { createGlobalStyle } from "styled-components";

export const colors = {
}

export const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
  }

  body{
    background-color: ${colors.creme};
    color: ${colors.rosa};
  }
`
