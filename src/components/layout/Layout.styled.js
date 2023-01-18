import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding-left: 30px;
  padding-right: 30px;
`;

export const Header = styled.header``;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding-top: 20px;
  padding-bottom: 20px;
  color: inherit;
  text-decoration: none;

  &.active {
    color: #1d63ff;
  }
`;
