import { Link, useParams } from 'react-router-dom'

const Perfil = () => {
  const { id } = useParams()

  return (
    <>
      <header><Link to="/">Restaurantes</Link></header>
      <main className="container">
      </main>
    </>
  )
}

export default Perfil
