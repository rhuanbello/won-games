import { screen, waitFor } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import userEvent from '@testing-library/user-event';

import Checkbox from '.';

describe('<Checkbox />', () => {
  it('should render with label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check');
  });

  it('should not render label', () => {
    renderWithTheme(<Checkbox />);

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument();
  });

  it('should render with black label', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />);

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    });
  });

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox label="checkbox label" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn();

    renderWithTheme(
      <Checkbox label="checkbox label" onCheck={onCheck} isChecked />
    );

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole('checkbox'));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it('should be accessible with tab', () => {
    renderWithTheme(<Checkbox label="Checkbox" labelFor="check" />);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus();
  });
});
