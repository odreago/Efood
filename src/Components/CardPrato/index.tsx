import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { colors } from '../../styles'
import type { Prato } from '../../data/restaurantes'
import { add, open } from '../../store/reducers/cart'
import { formataPreco } from '../../utils'

const Card = styled.div`
  background-color: ${colors.rosa};
  color: ${colors.creme};
  padding: 8px;

  img {
    display: block;
    width: 100%;
    height: 167px;
    object-fit: cover;
  }

  h3 {
    font-size: 16px;
    font-weight: 900;
    margin: 8px 0;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 8px;
  }
`

const Botao = styled.button`
  width: 100%;
  background-color: ${colors.creme};
  color: ${colors.rosa};
  border: none;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 0;
  cursor: pointer;
`

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  padding: 16px;
`

const Modal = styled.div`
  position: relative;
  display: flex;
  gap: 24px;
  max-width: 1024px;
  width: 100%;
  background-color: ${colors.rosa};
  color: ${colors.branco};
  padding: 32px;

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
    flex-shrink: 0;
  }

  h4 {
    font-size: 18px;
    font-weight: 900;
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    max-height: 90vh;
    overflow-y: auto;

    > img {
      width: 100%;
    }
  }
`

const Fechar = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: ${colors.branco};
  font-size: 20px;
  cursor: pointer;
`

const BotaoModal = styled(Botao)`
  width: auto;
  padding: 4px 8px;
`

const limitaTexto = (texto: string) =>
  texto.length > 132 ? texto.slice(0, 129) + '...' : texto

const CardPrato = ({ prato }: { prato: Prato }) => {
  const [aberto, setAberto] = useState(false)
  const dispatch = useDispatch()

  const adicionar = () => {
    dispatch(add(prato))
    dispatch(open())
    setAberto(false)
  }

  return (
    <>
      <Card>
        <img src={prato.foto} alt={prato.nome} />
        <h3>{prato.nome}</h3>
        <p>{limitaTexto(prato.descricao)}</p>
        <Botao onClick={() => setAberto(true)}>Mais detalhes</Botao>
      </Card>

      {aberto && (
        <Overlay onClick={() => setAberto(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <Fechar onClick={() => setAberto(false)}>✕</Fechar>
            <img src={prato.foto} alt={prato.nome} />
            <div>
              <h4>{prato.nome}</h4>
              <p>{prato.descricao}</p>
              <p>Serve: {prato.porcao}</p>
              <BotaoModal onClick={adicionar}>
                Adicionar ao carrinho - {formataPreco(prato.preco)}
              </BotaoModal>
            </div>
          </Modal>
        </Overlay>
      )}
    </>
  )
}

export default CardPrato
