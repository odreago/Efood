import pizza from '../assets/imagens/Pizza.png'
import sushi from '../assets/imagens/Sushi.png'
import massa from '../assets/imagens/Macarrao.png'


export type Prato = { id: number; nome: string; descricao: string; foto: string }

export type Restaurante = {
  id: number
  titulo: string
  tipo: string
  destaque?: boolean
  nota: number
  descricao: string
  foto: string
  pratos: Prato[]
}

const descricaoPrato =
  'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'

const pratos: Prato[] = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  nome: 'Pizza Marguerita',
  descricao: descricaoPrato,
  foto: pizza
}))

const descricaoRest =
  'Desfrute de massas caseiras, pizzas deliciosas e risotos cremosos, tudo no conforto da sua casa. Entrega rápida, pratos bem embalados e sabor irresistível. Peça já!'

export const restaurantes: Restaurante[] = [
  {
    id: 1,
    titulo: 'Hioki Sushi',
    tipo: 'Japonesa',
    destaque: true,
    nota: 4.9,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, pratos quentes e muito mais, entregues rapidamente.',
    foto: sushi,
    pratos
  },
  {
    id: 2,
    titulo: 'La Dolce Vita Trattoria',
    tipo: 'Italiana',
    nota: 4.6,
    descricao: descricaoRest,
    foto: massa,
    pratos
  },
  { id: 3, titulo: 'La Dolce Vita Trattoria', tipo: 'Italiana', nota: 4.6, descricao: descricaoRest, foto: massa, pratos },
  { id: 4, titulo: 'La Dolce Vita Trattoria', tipo: 'Italiana', nota: 4.6, descricao: descricaoRest, foto: massa, pratos },
  { id: 5, titulo: 'La Dolce Vita Trattoria', tipo: 'Italiana', nota: 4.6, descricao: descricaoRest, foto: massa, pratos },
  { id: 6, titulo: 'La Dolce Vita Trattoria', tipo: 'Italiana', nota: 4.6, descricao: descricaoRest, foto: massa, pratos }
]
