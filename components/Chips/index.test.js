import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Chips from './index';

describe('Chips', () => {
  describe('when rendered', () => {
    it('renders chips correctly', () => {
      const { queryByTestId } = render(<Chips />);

      expect(queryByTestId('chipsContent')).toBeVisible();
    });

    it('renders a positive chips', () => {
      const { queryByTestId } = render(
        <Chips variation="positive" content="Chips" />
      );

      expect(queryByTestId('chipsContent')).toHaveTextContent('↑ Chips');
    });

    it('renders a negative chips', () => {
      const { queryByTestId } = render(
        <Chips variation="positive" content="Chips" />
      );

      expect(queryByTestId('chipsContent')).toHaveTextContent('↓ Chips');
    });
  });
});
