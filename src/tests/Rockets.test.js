import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import { render, screen } from '@testing-library/react';
import Rockets from '../components/Rockets';

const renderRockets = () =>
  render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );

test('Rockets list is visible', () => {
  renderRockets();
  const rockets = screen.getByTestId('rocketList');
  expect(rockets).toBeInTheDocument;
});

test('Rockets are visible after on load', () => {
  renderRockets();
  const rocket = screen.findAllByTestId('rocket');
  expect(rocket).toBeInTheDocument;
});
