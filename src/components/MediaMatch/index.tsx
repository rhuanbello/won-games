import styled, { css } from 'styled-components';
import media, { DefaultBreakpoints } from 'styled-media-query';

type breakpoint = keyof DefaultBreakpoints;

export type MediaMatchProps = {
  lessThan?: breakpoint;
  greaterThan?: breakpoint;
};

const MediaMatchModifiers = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)` 
      display: block; 
    `}
  `,
  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)` 
      display: block; 
    `}
  `
};

export const MediaMatch = styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && MediaMatchModifiers.lessThan(lessThan)}
    ${!!greaterThan && MediaMatchModifiers.greaterThan(greaterThan)}
  `}
`;
