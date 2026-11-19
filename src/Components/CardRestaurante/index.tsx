import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'
import type {Restaurante} from '../../Types'

const Card = styled.div`
  position: relative;
  background-color: ${colors.branco};
  border: 1px solid ${colors.rosa};
  color: ${colors.rosa};

  > img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`

const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

const Tag = styled.span`
  background-color: ${colors.rosa};
  color: ${colors.creme};
  font-size: 12px;
  font-weight: 700;
  padding: 6px 4px;
  text-transform: capitalize;
`

const Corpo = styled.div`
  padding: 8px;

  p {
    font-size: 14px;
    line-height: 22px;
    margin: 16px 0;
  }
`

const Titulo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;

  span::after {
    content: ' ★';
    color: ${colors.amarelo};
  }
`

const Botao = styled(Link)`
  display: inline-block;
  background-color: ${colors.rosa};
  color: ${colors.creme};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
`

type Props = { restaurante: Restaurante }

const CardRestaurante = ({ restaurante: r }: Props) => (
  <Card>
    <img src={r.capa} alt={r.titulo} />
    <Tags>
      {r.destacado && <Tag>Destaque da semana</Tag>}
      <Tag>{r.tipo}</Tag>
    </Tags>
    <Corpo>
      <Titulo>
        <h3>{r.titulo}</h3>
        <span>{r.avaliacao}</span>
      </Titulo>
      <p>{r.descricao}</p>
      <Botao to={`/perfil/${r.id}`}>Saiba mais</Botao>
    </Corpo>
  </Card>
)

export default CardRestaurante
