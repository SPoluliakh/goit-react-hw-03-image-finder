import styled from 'styled-components';

export const GalleryItems = styled.li`
  flex-basis: calc(100% / 3 - 30px);
  margin-left: 30px;
  margin-bottom: 30px;
  border-radius: 10px;

  transition: scale, 250ms, liner;
  :hover,
  :focus {
    scale: 1.02;
`;

export const Photo = styled.img`
  display: block;
  border-radius: 5px;
  object-fit: cover;
  height: 250px;
  width: 380px;
`;
