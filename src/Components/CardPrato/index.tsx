import styled from 'styled-components'
import { colors } from '../../styles'
import type { Prato } from '../../data/restaurantes'

const Card = styled.div`
  background-color: ${colors.rosa};
  color: ${colors.creme};
  padding: 8px;

  img {
    display: block;
    width: 100%;
    height: 167px;
    object-fit: cover;
  }

  h3 { font-size: 16px; font-weight: 900; margin: 8px 0; }
  p { font-size: 14px; line-height: 22px; margin-bottom: 8px; }
`

const Botao = styled.button`
  width: 100%;
  background-color: ${colors.creme};
  color: ${colors.rosa};
  border: none;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
  cursor: pointer;
`

const CardPrato = ({ prato }: { prato: Prato }) => (
  <Card>
    <img src={prato.foto} alt={prato.nome} />
    <h3>{prato.nome}</h3>
    <p>{prato.descricao}</p>
    <Botao>Adicionar ao carrinho</Botao>
  </Card>
)

export default CardPrato
