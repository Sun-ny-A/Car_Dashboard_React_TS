import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import Footer from './components/Footer';
import ContentPage from './components/pages/ContentPage';



function App(): JSX.Element {
  
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ContentPage />}/>
          <Route path='*' element={<Navigate to='/' />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  )
}
  

export default App;