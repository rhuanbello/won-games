import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import FormSignIn from '.';

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = renderWithTheme(<FormSignIn />);

    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /sign in now/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render text and link to sign in', () => {
    renderWithTheme(<FormSignIn />);

    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument();
    expect(screen.getByText(/don’t have an account\?/i)).toBeInTheDocument();
  });
});
