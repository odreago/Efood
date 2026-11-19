import instagram from '../../assets/imagens/instagram.svg'
import facebook from '../../assets/imagens/facebook.svg'
import twitter from '../../assets/imagens/twitter.svg'

import styled from 'styled-components'
import { colors } from '../../styles'
import logo from '../../assets/imagens/logo.png'

const Rodape = styled.footer`
  background-color: ${colors.pessego};
  text-align: center;
  padding: 40px 0;
  font-size: 10px;
  margin-top: 120px;

  > img { margin-bottom: 32px; }
  p { max-width: 480px; margin: 80px auto 0; }
`

const Redes = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;

  img {
    display: block;
    width: 24px;
    height: 24px;
    margin: 0;
  }
`

const Footer = () => (
  <Rodape>
    <img src={logo} alt="efood" />
    <Redes>
      <Redes>
        <li><img src={instagram} alt="Instagram" /></li>
        <li><img src={facebook} alt="Facebook" /></li>
        <li><img src={twitter} alt="Twitter" /></li>
</Redes>
    </Redes>
    <p>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </p>
  </Rodape>
)

export default Footer
