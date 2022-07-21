import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { CheckoutPageContainer, FieldsetEndereco } from './styles'

export function Checkout() {
  return (
    <CheckoutPageContainer>
      <form action="">
        <div className="enderecoPagamento">
          <h2>Complete seu pedido</h2>
          <FieldsetEndereco>
            <legend>
              <MapPinLine size={22} />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </legend>
            <input type="text" placeholder="CEP" />
            <input type="text" placeholder="Rua" />
            <input type="text" placeholder="Número" />
            <input type="text" placeholder="Complemento" />
            <input type="text" placeholder="Bairro" />
            <input type="text" placeholder="Cidade" />
            <input type="text" placeholder="UF" />
          </FieldsetEndereco>
          <FieldsetEndereco>
            <legend>
              <CurrencyDollar size={22} />
              <div>
                <h3>Pagamento</h3>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </legend>
            <input type="radio" name="payment" id="credit" />
            <label htmlFor="credit">Cartão de Crédito</label>
            <input type="radio" name="payment" id="debit" />
            <label htmlFor="debit">Cartão de Débito</label>
            <input type="radio" name="payment" id="money" />
            <label htmlFor="money">Dinheiro</label>
          </FieldsetEndereco>
        </div>

        <div>
          <h2>Cafés selecionados</h2>
          <FieldsetEndereco>
            <button type="submit">Confirmar pedido</button>
          </FieldsetEndereco>
        </div>
      </form>
    </CheckoutPageContainer>
  )
}
