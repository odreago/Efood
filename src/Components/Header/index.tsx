import styled from 'styled-components'
import { colors } from '../../styles'
import fundo from '../../assets/imagens/Vector.png'
import logo from '../../assets/imagens/logo.png'

const Cabecalho = styled.header`
  background-color: ${colors.pessego};
  background-image: url(${fundo});
  height: 384px;
  text-align: center;
  padding-top: 40px;

  h1 {
    max-width: 540px;
    margin: 138px auto 0;
    font-size: 36px;
    font-weight: 900;
    line-height: 42px;
  }
`

const Header = () => (
  <Cabecalho>
    <img src={logo} alt="efood" />
    <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
  </Cabecalho>
)

export default Header
