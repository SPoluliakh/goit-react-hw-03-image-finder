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
  transition: background 150ms linear;
  :hover,
  :focus {
    background: ${p => p.theme.colors.BtnBackground};
  }
`;

export const SerchFormInput = styled.input`
  width: 200px;
  border-radius: ${p => p.theme.radii.normal};
  outline: none;
  font-size: ${p => p.theme.fontSizes.m}px;
  padding: 10px;
  background: ${p => p.theme.colors.inputBcg};
  border: ${p => p.theme.borders.serchBtn};
  color: ${p => p.theme.colors.inputText};
  }
  ::placeholder {
    color: ${p => p.theme.colors.placeholder};
  }
`;
