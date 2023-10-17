import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import header from './components/header';
import body from './components/body';
import footer from './components/footer';

function App(): JSX.Element {
  return (
    <Container className="App">
      <header />
      <body />
      <footer />
    </Container>
  );
}

export default App;