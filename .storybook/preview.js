import { RouterContext } from 'next/dist/shared/lib/router-context';
import GlobalStyles from 'styles/global';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  },
  backgrounds: {
    default: 'won-light',
    values: [
      { name: 'won-light', value: theme.colors.white },
      { name: 'won-dark', value: theme.colors.mainBg }
    ]
  }
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
];
