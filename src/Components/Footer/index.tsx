import styled from 'styled-components'
import { colors } from '../../styles'
import logo from '../../assets/imagens/logo.png'

const Rodape = styled.footer`
  background-color: ${colors.pessego};
  text-align: center;
  padding: 40px 0;
  font-size: 10px;
  margin-top: 120px;

  img { margin-bottom: 32px; }
  p { max-width: 480px; margin: 80px auto 0; }
`

const Redes = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;

  li {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${colors.rosa};
  }
`

const Footer = () => (
  <Rodape>
    <img src={logo} alt="efood" />
    <Redes>
      <li /><li /><li />
    </Redes>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </Rodape>
)

export default Footer
