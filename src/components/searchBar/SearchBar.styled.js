import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  gap: 5px;
`;

export const SearchInput = styled.input`
  border: 2px solid transparent;
  border-radius: 15px;
  height: 35px;
  width: 280px;
  padding-left: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-family: inherit;

  transition: all 0.3s ease;

  &:focus {
    outline: transparent;
    border-color: #1d63ff;
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 70px;
  color: #fff;
  font-family: 'FixelRegular';
  background-color: #1d63ff;
  border-radius: 15px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  transition: all 0.3s ease;

  &:focus,
  &:hover {
    box-shadow: none;
    background-color: #1144b4;
  }
`;
