import styled from 'styled-components'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import CardRestaurante from '../../Components/CardRestaurante'
import { Container } from '../../styles'
import { restaurantes } from '../../data/restaurantes'

const Lista = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;
  padding-top: 80px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Home = () => (
  <>
    <Header />
    <Container>
      <Lista>
        {restaurantes.map((r) => (
          <CardRestaurante key={r.id} restaurante={r} />
        ))}
      </Lista>
    </Container>
    <Footer />
  </>
)

export default Home
