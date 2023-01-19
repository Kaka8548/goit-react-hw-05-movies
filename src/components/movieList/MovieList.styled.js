import styled from 'styled-components';

export const TrendingList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 45px;
`;

export const TrendingListItem = styled.li`
  width: calc((100% - 90px) / 3);
  margin-top: 10px;
  text-align: left;
`;

export const TrendingListPoster = styled.img`
  margin-bottom: 10px;
`;

export const TrendingListTitle = styled.p`
  font-size: 20px;
  font-family: 'FixelREgular';
`;
