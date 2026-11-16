export type DadosEntrega = {
  nome: string
  endereco: string
  cidade: string
  cep: string
  numero: string
  complemento: string
}

export const entregaVazia: DadosEntrega = {
  nome: '',
  endereco: '',
  cidade: '',
  cep: '',
  numero: '',
  complemento: ''
}
