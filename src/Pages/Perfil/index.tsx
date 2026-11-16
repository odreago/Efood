import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import HeaderPerfil from '../../Components/HeaderPerfil'
import Footer from '../../Components/Footer'
import CardPrato from '../../Components/CardPrato'
import { Container, colors } from '../../styles'
import { restaurantes } from '../../data/restaurantes'

const Banner = styled.div<{ $capa: string }>`
  height: 280px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(p) => p.$capa});
  background-size: cover;
  background-position: center;
  color: ${colors.branco};
  padding: 32px 0 25px;

  ${Container} {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  span { font-size: 32px; font-weight: 100; }
  h2 { font-size: 32px; font-weight: 900; }
`

const Lista = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  padding-top: 56px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Perfil = () => {
  const { id } = useParams()
  const restaurante = restaurantes.find((r) => r.id === Number(id))

  if (!restaurante) return <h1>Restaurante não encontrado</h1>

  return (
    <>
      <HeaderPerfil />
      <Banner $capa={restaurante.foto}>
        <Container>
          <span>{restaurante.tipo}</span>
          <h2>{restaurante.titulo}</h2>
        </Container>
      </Banner>
      <Container>
        <Lista>
          {restaurante.pratos.map((p) => (
            <CardPrato key={p.id} prato={p} />
          ))}
        </Lista>
      </Container>
      <Footer />
    </>
  )
}

export default Perfil
