import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Registration from './Registration';

afterEach(cleanup);
it('should register players', () => {
  const newGameHandler = jest.fn();
  const { queryByTestId } = render(<Registration onNewGame={newGameHandler} />);
  fireEvent.change(queryByTestId('p1-input'), { target: { value: 'Yaniv' } });
  fireEvent.change(queryByTestId('p2-input'), {
    target: { value: 'Computer' }
  });
  expect(newGameHandler).toHaveBeenCalled();
});
