import styled, { css } from 'styled-components';

export const Container = styled.main`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin-inline: auto;
    padding-inline: calc(${theme.grid.gutter} / 2);
  `}
`;
