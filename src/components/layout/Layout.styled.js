import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 30px;
`;

export const Header = styled.header``;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding-top: 30px;
  padding-bottom: 30px;
  color: inherit;
  font-size: 20px;
  text-decoration: none;

  &.active {
    color: #1d63ff;
  }
`;
