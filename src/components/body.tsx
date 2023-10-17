import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';

import header from './header';

interface BodyProps {
  sidebar: boolean;
  children: JSX.Element | JSX.Element[];
  header: JSX.Element;
}

export default function Body({ header, children }: BodyProps) {
  return (
    <Container>
      {header}
      <Stack direction="horizontal">
        <Container>{children}</Container>
      </Stack>
    </Container>
  );
}