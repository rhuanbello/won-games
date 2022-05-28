import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';
import { HeadingProps, LineColors } from '.';

const wrappersModifiers = {
  line: {
    left: (theme: DefaultTheme, lineColor: LineColors) => css`
      padding: ${theme.spacings.xxsmall};
      border-left: 0.7rem solid ${theme.colors[lineColor]};
    `,
    bottom: (theme: DefaultTheme, lineColor: LineColors) => css`
      position: relative;
      margin-bottom: ${theme.spacings.xxsmall};

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -1rem;
        width: 5rem;
        border-bottom: 0.5rem solid ${theme.colors[lineColor]};
      }
    `
  },
  size: {
    small: (theme: DefaultTheme) => css`
      font-size: ${theme.font.sizes.medium};

      &::after {
        width: 3rem;
      }
    `,
    medium: (theme: DefaultTheme) => css`
      font-size: ${theme.font.sizes.xlarge};

      ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
    `
  }
};

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineSide, lineColor, size }) => css`
    color: ${theme.colors[color!]};

    ${lineSide !== 'none' &&
    wrappersModifiers.line[lineSide as keyof typeof wrappersModifiers.line](
      theme,
      lineColor!
    )};

    ${!!size && wrappersModifiers.size[size](theme)}
  `}
`;
