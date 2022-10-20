import styled from 'styled-components';

export const LoadMore = styled.button`
  margin: ${p => p.theme.space[3]}px auto;
  border: ${p => p.theme.borders.loadMore};
  cursor: pointer;
  background: ${p => p.theme.colors.BtnBackground};
  padding: 5px;
  min-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${p => p.theme.radii.normal};
  transition: background 150ms linear;

  :hover {
    background: ${p => p.theme.colors.primary};
  }
`;
