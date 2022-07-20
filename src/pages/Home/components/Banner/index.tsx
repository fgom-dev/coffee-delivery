import { BannerContainer } from './styles'

import coffeeBannerImg from '../../../../assets/images/coffee-banner.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Banner() {
  return (
    <BannerContainer>
      <div className="bannerText">
        <div className="bannerTextTitle">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <div className="bannerTextContent">
          <div>
            <p>
              <span className="yellowDark">
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </p>
            <p>
              <span className="yellow">
                <Timer size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </p>
          </div>
          <div>
            <p>
              <span className="baseText">
                <Package size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </p>
            <p>
              <span className="purple">
                <Coffee size={16} weight="fill" />
              </span>
              O café chega fresquinho até você
            </p>
          </div>
        </div>
      </div>
      <img src={coffeeBannerImg} alt="" />
    </BannerContainer>
  )
}
