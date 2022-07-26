import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { CheckoutPageContainer, FieldsetForm } from './styles'

export function Checkout() {
  return (
    <CheckoutPageContainer>
      <form action="">
        <div className="enderecoPagamento">
          <h2>Complete seu pedido</h2>
          <FieldsetForm>
            <div className="titulo">
              <span className="mapPinLine">
                <MapPinLine size={22} />
              </span>
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
            <div className="inputs">
              <input type="text" placeholder="CEP" id="cep" />
              <input type="text" placeholder="Rua" id="rua" />
              <div>
                <input type="text" placeholder="Número" id="numero" />
                <input type="text" placeholder="Complemento" id="complemento" />
              </div>
              <div>
                <input type="text" placeholder="Bairro" id="bairro" />
                <input type="text" placeholder="Cidade" id="cidade" />
                <input type="text" placeholder="UF" id="uf" />
              </div>
            </div>
          </FieldsetForm>

          <FieldsetForm>
            <div className="titulo">
              <span className="currencyDollar">
                <CurrencyDollar size={22} />
              </span>
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </div>
            <div>
              <input type="radio" name="payment" id="credit" />
              <label htmlFor="credit">Cartão de Crédito</label>
              <input type="radio" name="payment" id="debit" />
              <label htmlFor="debit">Cartão de Débito</label>
              <input type="radio" name="payment" id="money" />
              <label htmlFor="money">Dinheiro</label>
            </div>
          </FieldsetForm>
        </div>

        <div>
          <h2>Cafés selecionados</h2>
          <FieldsetForm>
            <button type="submit">Confirmar pedido</button>
          </FieldsetForm>
        </div>
      </form>
    </CheckoutPageContainer>
  )
}
