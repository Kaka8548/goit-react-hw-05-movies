import styled from 'styled-components';

export const ReviewsList = styled.ul`
  margin-top: 15px;
`;

export const ReviewsItem = styled.li`
  & + & {
    margin-top: 10px;
  }
`;

export const AuthorName = styled.p`
  font-family: 'FixelRegular';
  font-size: 16px;
`;

export const AuthorReview = styled.p``;

export const NoReviewText = styled.p`
  margin-top: 15px;
  font-family: 'FixelRegular';
`;
