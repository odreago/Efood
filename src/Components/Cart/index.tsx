import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { colors } from '../../styles'
import type { RootState } from '../../store'
import { clear, close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../../utils'
import Entrega from '../Checkout/Entrega'
import { entregaVazia } from '../Checkout/types'
import type { DadosEntrega } from '../Checkout/types'
import Pagamento from '../Checkout/Pagamento'
import Confirmacao from '../Checkout/Confirmacao'

type Etapa = 'carrinho' | 'entrega' | 'pagamento' | 'confirmacao'

const Overlay = styled.div<{ $aberto: boolean }>`
  position: fixed;
  inset: 0;
  display: ${(p) => (p.$aberto ? 'flex' : 'none')};
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.73);
  z-index: 2;
`

const Sidebar = styled.aside`
  width: 360px;
  max-width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: ${colors.rosa};
  padding: 32px 8px;
  color: ${colors.creme};
  font-size: 14px;
  font-weight: 700;
`

const Item = styled.li`
  position: relative;
  display: flex;
  gap: 8px;
  background-color: ${colors.pessego};
  color: ${colors.rosa};
  padding: 8px;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }
`

const Lixeira = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: none;
  border: none;
  color: ${colors.rosa};
  font-size: 16px;
  cursor: pointer;
`

const Total = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px;
`

const Botao = styled.button`
  width: 100%;
  background-color: ${colors.pessego};
  color: ${colors.rosa};
  border: none;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
  cursor: pointer;
`

const Cart = () => {
  const { items, isOpen } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const [etapa, setEtapa] = useState<Etapa>('carrinho')
  const [entrega, setEntrega] = useState<DadosEntrega>(entregaVazia)
  const [pedido, setPedido] = useState('')

  const total = items.reduce((acc, item) => acc + item.preco, 0)

  const resetar = () => {
    setEtapa('carrinho')
    setEntrega(entregaVazia)
    setPedido('')
  }

  const fechar = () => {
    dispatch(close())
    if (etapa === 'confirmacao') resetar()
  }

  const finalizarPagamento = () => {
    setPedido(`PED-${Date.now().toString().slice(-6)}`)
    dispatch(clear())
    setEtapa('confirmacao')
  }

  const concluir = () => {
    dispatch(close())
    resetar()
  }

  return (
    <Overlay $aberto={isOpen} onClick={fechar}>
      <Sidebar onClick={(e) => e.stopPropagation()}>
        {etapa === 'carrinho' &&
          (items.length > 0 ? (
            <>
              <ul>
                {items.map((item) => (
                  <Item key={item.id}>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.nome}</h3>
                      <span>{formataPreco(item.preco)}</span>
                    </div>
                    <Lixeira onClick={() => dispatch(remove(item.id))}>🗑</Lixeira>
                  </Item>
                ))}
              </ul>
              <Total>
                <span>Valor total</span>
                <span>{formataPreco(total)}</span>
              </Total>
              <Botao onClick={() => setEtapa('entrega')}>Continuar com a entrega</Botao>
            </>
          ) : (
            <p>O carrinho está vazio, adicione pelo menos um produto para continuar com a compra.</p>
          ))}

        {etapa === 'entrega' && (
          <Entrega
            inicial={entrega}
            onContinuar={(dados) => {
              setEntrega(dados)
              setEtapa('pagamento')
            }}
            onVoltar={() => setEtapa('carrinho')}
          />
        )}

        {etapa === 'pagamento' && (
          <Pagamento
            total={total}
            onFinalizar={finalizarPagamento}
            onVoltar={() => setEtapa('entrega')}
          />
        )}

        {etapa === 'confirmacao' && (
          <Confirmacao pedido={pedido} onConcluir={concluir} />
        )}
      </Sidebar>
    </Overlay>
  )
}

export default Cart
