import Container from 'react-bootstrap/Container';

export default function Footer(): JSX.Element {
  return (
    <>
      <Container className="footer">
        <p>&copy; {new Date().getFullYear()} Car Inventory Dashboard</p>
        <p> New shipments weekly! Contact cars@email.com for new arrivals before they hit the lot.</p>
      </Container>
    </>
  );
}