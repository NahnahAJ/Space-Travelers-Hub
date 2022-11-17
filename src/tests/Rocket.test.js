import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import store from '../redux/configureStore';
import Rocket from '../components/Rocket';

const renderRocket = () => {
  const testRocket = {
    id: 1,
    rocketName: 'Test Rocket',
    description: 'Test Description',
    flickrImages: ['testImage1', 'testImage2'],
    reserved: false,
  };
  render(
    <Provider store={store}>
      <Rocket rocket={testRocket} />
    </Provider>,
  );
};

test('Rocket images are visible after load', () => {
  renderRocket();
  const rocketImage = screen.getByRole('img');
  expect(rocketImage).toBeInTheDocument();
  expect(rocketImage).toBeVisible();
  expect(rocketImage.src).toBe('http://localhost/testImage1');
});

test('Heading is visible after load', () => {
  renderRocket();
  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
  expect(heading).toBeVisible();
});

test('Badge is visible when reserved property is true', () => {
  const testRocket = {
    id: 1,
    rocketName: 'Test Rocket',
    description: 'Test Description',
    flickrImages: ['testImage1', 'testImage2'],
    reserved: true,
  };
  render(
    <Provider store={store}>
      <Rocket rocket={testRocket} />
    </Provider>,
  );
  const badge = screen.getByTestId('testBadge');
  expect(badge).toBeVisible();
});

test('Badge is visible when reserve button is clicked', () => {
  renderRocket();
  const badge = screen.getByTestId('testBadge');
  const reserveBtn = screen.getByRole('button', { name: 'Reserve Rocket' });
  expect(reserveBtn).toBeInTheDocument();
  fireEvent.click(reserveBtn);
  expect(badge).toBeVisible();
});
