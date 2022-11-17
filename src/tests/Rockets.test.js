import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import store from '../redux/configureStore';
import Rockets from '../components/Rockets';

const renderRockets = () => render(
  <Provider store={store}>
    <Rockets />
  </Provider>,
);

test('Rockets list is visible', () => {
  renderRockets();
  const rockets = screen.getByTestId('rocketList');
  expect(rockets).toBeInTheDocument();
});
