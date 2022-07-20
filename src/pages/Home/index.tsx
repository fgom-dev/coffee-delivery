import { Banner } from './components/Banner'
import { CoffeeCard } from './components/CoffeeCard'
import { CoffeeCardContainer, HomeContainer } from './styles'

export function Home() {
  return (
    <>
      <Banner />
      <HomeContainer>
        <h2>Nossos cafés</h2>
        <CoffeeCardContainer>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </CoffeeCardContainer>
      </HomeContainer>
    </>
  )
}
