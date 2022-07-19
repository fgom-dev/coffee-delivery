import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { BannerContainer } from './styles'

import coffeeBanner from '../../assets/images/coffee-banner.svg'

export function Home() {
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
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </p>
            <p>
              <span>
                <Timer size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </p>
          </div>
          <div>
            <p>
              <span>
                <Package size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </p>
            <p>
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              O café chega fresquinho até você
            </p>
          </div>
        </div>
      </div>
      <img src={coffeeBanner} alt="" />
    </BannerContainer>
  )
}
