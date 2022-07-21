import { HeaderContainer } from './styles'

import logoImg from '../../assets/images/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logoImg} alt="" />
      </NavLink>

      <div>
        <span>
          <MapPin size={32} weight="fill" />
          Porto Alegre, RS
        </span>
        <NavLink to="/checkout">
          <ShoppingCart size={32} weight="fill" />
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
