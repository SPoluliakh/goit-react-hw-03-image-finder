import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 10;
`;

export const SearchForm = styled.form`
  background-color: ${p => p.theme.colors.primary};
  display: flex;
  justify-content: center;
  padding: 5px;
`;

export const SearchFormBtn = styled.button`
  border: ${p => p.theme.borders.serchBtn};
  cursor: pointer;
  background: ${p => p.theme.colors.primary};
  padding: 8px;
  width: 50px;
  border-radius: ${p => p.theme.radii.normal};
  :hover,
  :focus {
    background: ${p => p.theme.colors.BtnBackground};
  }
`;

export const SerchFormInput = styled.input`
  width: 200px;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => p.theme.borders.none};
  outline: none;
  font-size: ${p => p.theme.fontSizes.m}px;
  padding: 10px;
`;
