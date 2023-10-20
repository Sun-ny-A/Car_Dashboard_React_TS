import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Header from './components/Header';
import Footer from './components/Footer';
import ContentPage from './components/pages/ContentPage';
import NewArrivalsPage from './components/pages/NewArrivalsPage';
import Signin from './components/Signin';


function App(): JSX.Element {
  
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Signin/>}/>
          <Route path='/content' element={<ContentPage />}/>
          <Route path='/arrivals' element={<NewArrivalsPage />}/>
          <Route path='*' element={<Navigate to='/' />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  )
}
  

export default App;