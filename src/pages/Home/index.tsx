import { Banner } from './components/Banner'
import { CoffeeCard } from './components/CoffeeCard'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <>
      <Banner />
      <HomeContainer>
        <h2>Nossos cafés</h2>
        <div>
          <CoffeeCard />
        </div>
      </HomeContainer>
    </>
  )
}
