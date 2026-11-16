import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  rosa: '#E66767',
  pessego: '#FFEBD9',
  creme: '#FFF8F2',
  branco: '#FFFFFF',
  amarelo: '#FFB930'
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

export const breakpoints = { mobile: '768px'}

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;
`
