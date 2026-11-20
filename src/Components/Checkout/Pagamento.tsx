import { useState } from 'react'
import { formataPreco } from '../../utils'
import type { DadosPagamento } from './types'
import { Botao, Botoes, Campo, Linha, Texto, Titulo } from './styles'

type Props = {
  total: number
  carregando: boolean
  erroEnvio: string
  onFinalizar: (dados: DadosPagamento) => void
  onVoltar: () => void
}

const Pagamento = ({ total, carregando, erroEnvio, onFinalizar, onVoltar }: Props) => {
  const [dados, setDados] = useState<DadosPagamento>({
    nomeCartao: '',
    numeroCartao: '',
    cvv: '',
    mes: '',
    ano: ''
  })
  const [erros, setErros] = useState<Partial<Record<keyof DadosPagamento, string>>>({})

  const muda = (campo: keyof DadosPagamento, valor: string) =>
    setDados((d) => ({ ...d, [campo]: valor }))

  const validar = () => {
    const e: typeof erros = {}
    const anoAtual = new Date().getFullYear()
    const mes = Number(dados.mes)
    const ano = Number(dados.ano)

    if (dados.nomeCartao.trim().length < 3) e.nomeCartao = 'Informe o nome no cartão'
    if (dados.numeroCartao.replace(/\D/g, '').length !== 16) e.numeroCartao = 'Cartão deve ter 16 números'
    if (dados.cvv.length !== 3) e.cvv = '3 números'
    if (!(mes >= 1 && mes <= 12)) e.mes = 'Mês de 1 a 12'
    if (!(ano >= anoAtual && ano <= anoAtual + 20)) e.ano = `A partir de ${anoAtual}`
    setErros(e)
    return Object.keys(e).length === 0
  }

  const finalizar = () => {
    if (validar()) onFinalizar(dados)
  }

  return (
    <div>
      <Titulo>Pagamento - Valor a pagar {formataPreco(total)}</Titulo>

      <Campo $erro={!!erros.nomeCartao}>
        <label htmlFor="nomeCartao">Nome no cartão</label>
        <input id="nomeCartao" value={dados.nomeCartao} onChange={(e) => muda('nomeCartao', e.target.value)} />
        {erros.nomeCartao && <small>{erros.nomeCartao}</small>}
      </Campo>

      <Linha>
        <Campo $erro={!!erros.numeroCartao} style={{ flex: 2 }}>
          <label htmlFor="numeroCartao">Número do cartão</label>
          <input id="numeroCartao" inputMode="numeric" maxLength={19} value={dados.numeroCartao} onChange={(e) => muda('numeroCartao', e.target.value)} />
          {erros.numeroCartao && <small>{erros.numeroCartao}</small>}
        </Campo>
        <Campo $erro={!!erros.cvv} style={{ flex: 1 }}>
          <label htmlFor="cvv">CVV</label>
          <input id="cvv" inputMode="numeric" maxLength={3} value={dados.cvv} onChange={(e) => muda('cvv', e.target.value)} />
          {erros.cvv && <small>{erros.cvv}</small>}
        </Campo>
      </Linha>

      <Linha>
        <Campo $erro={!!erros.mes}>
          <label htmlFor="mes">Mês de vencimento</label>
          <input id="mes" inputMode="numeric" maxLength={2} value={dados.mes} onChange={(e) => muda('mes', e.target.value)} />
          {erros.mes && <small>{erros.mes}</small>}
        </Campo>
        <Campo $erro={!!erros.ano}>
          <label htmlFor="ano">Ano de vencimento</label>
          <input id="ano" inputMode="numeric" maxLength={4} value={dados.ano} onChange={(e) => muda('ano', e.target.value)} />
          {erros.ano && <small>{erros.ano}</small>}
        </Campo>
      </Linha>

            {erroEnvio && <Texto>{erroEnvio}</Texto>}
      <Botoes>
        <Botao onClick={finalizar} disabled={carregando}>
          {carregando ? 'Finalizando pagamento...' : 'Finalizar pagamento'}
        </Botao>
        <Botao onClick={onVoltar} disabled={carregando}>
          Voltar para a edição de endereço
        </Botao>
      </Botoes>
    </div>
  )
}

export default Pagamento
