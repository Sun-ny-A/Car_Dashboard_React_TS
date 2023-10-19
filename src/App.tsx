import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import Heading from './components/Header';
import Logged from './pages/LoggedIn';
import data from '../data/apidata';
import footer from './components/Footer';
import apidata from '../data/apidata';

import './styles.css';


function App() {
  return (
    <Container>
      <BrowserRouter>
        <Heading />
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='*' element={<Navigate to='/Login' />}/>
          <Route path='/apidata' element={<apidata />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;