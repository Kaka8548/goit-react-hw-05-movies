import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MainDetailsList = styled.ul`
  display: flex;
  gap: 50px;
`;

export const MainDetailsItem = styled.li`
  width: calc((100% - 100px) / 2);
`;

export const DetailsList = styled.ul`
  border-radius: 15px;
  background-color: #fff9e4;
  padding: 15px;
`;

export const DetailsItem = styled.ul`
  & + & {
    margin-top: 10px;
  }

  &:nth-child(2n + 3) {
    font-family: 'FixelRegular';
    font-size: 18px;
  }
`;

export const DetailsTitle = styled.h3`
  font-family: 'FixelBold';
  font-size: 28px;
  color: #1d63ff;
`;

export const GenresList = styled.ul`
  display: flex;
  gap: 15px;
`;

export const GenresItem = styled.li``;

export const AddInfoList = styled.ul`
  list-style: disc;
  margin-left: 15px;
`;

export const AddInfoItem = styled.li``;

export const AddInfoLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &.active {
    color: #1d63ff;
    text-decoration: underline;
  }
`;
