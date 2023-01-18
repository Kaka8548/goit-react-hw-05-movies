import { Outlet } from 'react-router-dom';
import { Container, Header, Nav, StyledLink } from './Layout.styled';

export default function Layout() {
  return (
    <Container>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>
      <Outlet />
    </Container>
  );
}
