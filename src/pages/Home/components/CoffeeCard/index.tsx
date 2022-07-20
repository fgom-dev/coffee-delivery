import { ShoppingCart } from 'phosphor-react'
import { CoffeCardContainer } from './styles'

import coffeeExpresso from '../../../../assets/images/coffee-expresso.svg'

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
        <form>
          <p>
            <span>R$</span>9,90
          </p>
          <input type="number" name="" id="" />
          <button type="submit">
            <ShoppingCart size={20} weight="fill" />
          </button>
        </form>
      </div>
    </CoffeCardContainer>
  )
}
