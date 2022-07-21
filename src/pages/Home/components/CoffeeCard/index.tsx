import { ShoppingCart } from 'phosphor-react'
import { CoffeCardContainer } from './styles'

import coffeeExpresso from '../../../../assets/images/coffee-expresso.svg'
import { InputNumber } from '../../../../components/InputNumber'

export function CoffeeCard() {
  return (
    <CoffeCardContainer>
      <div className="cardContent">
        <img src={coffeeExpresso} alt="" />
        <div className="tagList">
          <span className="tag">Tradicional</span>
        </div>
        <h3>Expresso Tradicional</h3>
        <p className="description">
          O tradicional café feito com água quente e grãos moídos
        </p>
        <div className="cardPrice">
          <p>
            <span>R$</span>9,90
          </p>
          <form>
            <InputNumber />
            <button type="submit">
              <ShoppingCart size={20} weight="fill" />
            </button>
          </form>
        </div>
      </div>
    </CoffeCardContainer>
  )
}
