import { useEffect, useState } from 'react'
import type { Restaurante } from '../Types'

const URL = 'https://api-ebac.vercel.app/api/efood/restaurantes'

export const useRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(false)

  useEffect(() => {
    fetch(URL)
      .then((res) => {
        if (!res.ok) throw new Error('Falha na requisição')
        return res.json()
      })
      .then((dados: Restaurante[]) => setRestaurantes(dados))
      .catch(() => setErro(true))
      .finally(() => setCarregando(false))
  }, [])

  return { restaurantes, carregando, erro }
}
