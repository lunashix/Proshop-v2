import { Container } from 'react-bootstrap'
<<<<<<< Updated upstream
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
=======
import Header from './components/Header'
import Footer from './components/Footer'
>>>>>>> Stashed changes

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
<<<<<<< Updated upstream
          <Outlet />
=======
          <h1>Welcome To ProShop </h1>
>>>>>>> Stashed changes
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App