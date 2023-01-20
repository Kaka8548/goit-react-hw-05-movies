import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackButton = styled(Link)`
  display: inline-block;
  text-decoration: none;
  background-color: #1659ee;
  color: #fff;
  font-family: 'FixelRegular';
  border-radius: 55px;
  margin-bottom: 20px;
  padding: 15px 25px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  transition: all 0.3s ease;

  &:focus,
  &:hover {
    box-shadow: none;
    background-color: #1144b4;
  }
`;
