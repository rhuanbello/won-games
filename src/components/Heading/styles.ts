import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';
import { HeadingProps } from '.';

const wrappersModifiers = {
  line: {
    left: (theme: DefaultTheme) => css`
      padding: ${theme.spacings.xxsmall};
      border-left: 0.7rem solid ${theme.colors.secondary};
    `,
    bottom: (theme: DefaultTheme) => css`
      position: relative;
      margin-bottom: ${theme.spacings.xxsmall};

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -1rem;
        width: 5rem;
        border-bottom: 0.5rem solid ${theme.colors.primary};
      }
    `
  }
};

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineSide }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors[color!]};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}

    ${lineSide !== 'none' &&
    wrappersModifiers.line[lineSide as keyof typeof wrappersModifiers.line](
      theme
    )};
  `}
`;
