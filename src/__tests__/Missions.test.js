import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../components/Missions';

const renderComponent = () => {
  render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );
};

describe('Testing Missions Table component', () => {
  test('Check mission title', () => {
    renderComponent();
    const missionHeader = screen.getByText(/Mission/i);
    expect(missionHeader).toBeInTheDocument();
  });

  test('Check description title', () => {
    renderComponent();
    const descriptionHeader = screen.getByText(/Description/i);
    expect(descriptionHeader).toBeInTheDocument();
  });

  test('Check status in DOM', () => {
    renderComponent();
    const statusHeader = screen.getByText(/Status/i);
    expect(statusHeader).toBeInTheDocument();
  });

  test('Check if the Table is in the dom', () => {
    renderComponent();
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
  });

  test('Check if there are a group of rows', () => {
    renderComponent();
    const rowsGroup = screen.getAllByRole('rowgroup');
    expect(rowsGroup.length).toBeGreaterThan(1);
  });

  test('Check if the row element is in the dom', () => {
    renderComponent();
    const rowElement = screen.getByRole('row');
    expect(rowElement).toBeInTheDocument();
  });
});
