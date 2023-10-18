import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';

function App(): JSX.Element {

  return (
    <>
      <Container data-bs-theme='dark'>
        <Header />
        <Body />
      </Container>
      <Footer />
    </>
    
  )
}

export default App