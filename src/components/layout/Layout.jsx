import { Outlet } from 'react-router-dom';
import { Container, Header, Nav, StyledLink } from './Layout.styled';
import { Suspense } from 'react';

export default function Layout() {
  return (
    <Container>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
