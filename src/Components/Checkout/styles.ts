import styled from 'styled-components'
import { colors } from '../../styles'

export const Titulo = styled.h3`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${colors.creme};
`

export const Texto = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  margin-bottom: 24px;
  color: ${colors.creme};
`

export const Linha = styled.div`
  display: flex;
  gap: 34px;
`

export const Campo = styled.div<{ $erro?: boolean }>`
  flex: 1;
  margin-bottom: 8px;

  label {
    display: block;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
    color: ${colors.creme};
  }

  input {
    width: 100%;
    height: 32px;
    background-color: ${colors.pessego};
    border: 2px solid ${(p) => (p.$erro ? '#8B0000' : colors.pessego)};
    padding: 0 8px;
    font-size: 14px;
    font-weight: 700;
    color: #4b4b4b;
    outline: none;
  }

  small {
    display: block;
    margin-top: 4px;
    font-size: 12px;
    color: #fff;
  }
`

export const Botoes = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Botao = styled.button`
  width: 100%;
  background-color: ${colors.pessego};
  color: ${colors.rosa};
  border: none;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
  cursor: pointer;
`
