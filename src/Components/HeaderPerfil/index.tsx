import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../store'
import { open } from '../../store/reducers/cart'

import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors, Container } from '../../styles'
import fundo from '../../assets/imagens/Vector.png'
import logo from '../../assets/imagens/logo.png'

const Cabecalho = styled.header`
  background-color: ${colors.pessego};
  background-image: url(${fundo});
  height: 163px;
  display: flex;
  align-items: center;

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 900;
  }

  a { color: ${colors.rosa}; }
`

const HeaderPerfil = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.cart)

  return (
    <Cabecalho>
      <Container>
        <Link to="/">Restaurantes</Link>
        <img src={logo} alt="efood" />
        <a href="#" onClick={(e) => { e.preventDefault(); dispatch(open()) }}>
          {items.length} produto(s) no carrinho
        </a>
      </Container>
    </Cabecalho>
  )
}

export default HeaderPerfil
