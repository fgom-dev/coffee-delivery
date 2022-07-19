import { HeaderContainer } from './styles'

import logoImg from '../../assets/images/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />

      <div>
        <span>
          <MapPin size={32} weight="fill" />
          Porto Alegre, RS
        </span>
        <button>
          <ShoppingCart size={32} weight="fill" />
        </button>
      </div>
    </HeaderContainer>
  )
}
