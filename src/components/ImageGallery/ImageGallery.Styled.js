import styled from 'styled-components';

export const ImageGalleryList = styled.ul`
  list-style: none;
  padding-left: 0px;
  margin: 0px;
  padding-top: 60px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: -30px;
  margin-bottom: -30px;
`;

export const LargeImg = styled.img`
  display: block;

  max-width: 1200px;
  width: 100%;

  height: auto;
  max-height: 740px;
`;
