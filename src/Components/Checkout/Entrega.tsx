import { useState } from 'react'
import { Botao, Botoes, Campo, Linha, Titulo } from './styles'
import type { DadosEntrega } from './types'

type Props = {
  inicial: DadosEntrega
  onContinuar: (dados: DadosEntrega) => void
  onVoltar: () => void
}

const Entrega = ({ inicial, onContinuar, onVoltar }: Props) => {
  const [dados, setDados] = useState(inicial)
  const [erros, setErros] = useState<Partial<Record<keyof DadosEntrega, string>>>({})

  const muda = (campo: keyof DadosEntrega, valor: string) =>
    setDados((d) => ({ ...d, [campo]: valor }))

  const validar = () => {
    const e: typeof erros = {}
    if (dados.nome.trim().length < 5) e.nome = 'Informe o nome completo'
    if (!dados.endereco.trim()) e.endereco = 'Informe o endereço'
    if (!dados.cidade.trim()) e.cidade = 'Informe a cidade'
    if (dados.cep.replace(/\D/g, '').length !== 8) e.cep = 'CEP deve ter 8 números'
    if (!dados.numero.trim()) e.numero = 'Informe o número'
    setErros(e)
    return Object.keys(e).length === 0
  }

  const continuar = () => {
    if (validar()) onContinuar(dados)
  }

  return (
    <div>
      <Titulo>Entrega</Titulo>

      <Campo $erro={!!erros.nome}>
        <label htmlFor="nome">Quem irá receber</label>
        <input id="nome" value={dados.nome} onChange={(e) => muda('nome', e.target.value)} />
        {erros.nome && <small>{erros.nome}</small>}
      </Campo>

      <Campo $erro={!!erros.endereco}>
        <label htmlFor="endereco">Endereço</label>
        <input id="endereco" value={dados.endereco} onChange={(e) => muda('endereco', e.target.value)} />
        {erros.endereco && <small>{erros.endereco}</small>}
      </Campo>

      <Campo $erro={!!erros.cidade}>
        <label htmlFor="cidade">Cidade</label>
        <input id="cidade" value={dados.cidade} onChange={(e) => muda('cidade', e.target.value)} />
        {erros.cidade && <small>{erros.cidade}</small>}
      </Campo>

      <Linha>
        <Campo $erro={!!erros.cep}>
          <label htmlFor="cep">CEP</label>
          <input id="cep" inputMode="numeric" maxLength={9} value={dados.cep} onChange={(e) => muda('cep', e.target.value)} />
          {erros.cep && <small>{erros.cep}</small>}
        </Campo>
        <Campo $erro={!!erros.numero}>
          <label htmlFor="numero">Número</label>
          <input id="numero" inputMode="numeric" value={dados.numero} onChange={(e) => muda('numero', e.target.value)} />
          {erros.numero && <small>{erros.numero}</small>}
        </Campo>
      </Linha>

      <Campo>
        <label htmlFor="complemento">Complemento (opcional)</label>
        <input id="complemento" value={dados.complemento} onChange={(e) => muda('complemento', e.target.value)} />
      </Campo>

      <Botoes>
        <Botao onClick={continuar}>Continuar com o pagamento</Botao>
        <Botao onClick={onVoltar}>Voltar para o carrinho</Botao>
      </Botoes>
    </div>
  )
}

export default Entrega
