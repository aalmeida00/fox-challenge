import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import Card from './index';

describe('Card', () => {
  describe('when rendered', () => {
    it('renders card correctly', () => {
      const { queryByTestId } = render(<Card />);

      expect(queryByTestId('card')).toBeVisible();
    });
  });
});
