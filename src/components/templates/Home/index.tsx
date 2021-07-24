// External libs

// Assets

// Componentes
import Header from '@/components/organisms/Header'
import Hero from '@/components/organisms/Hero'

// Subcomponentes and style
import * as Styled from './styles'

// Services

// Types

const Home: React.FC = () => {
  return (
    <Styled.Container>
      <Header />
      <Hero />
    </Styled.Container>
  )
}

export default Home
