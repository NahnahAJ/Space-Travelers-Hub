import Missions from '../components/Missions';
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/configureStore'

const renderComponent = () => {
  render(
    <Provider store={store}>
      <Missions />
    </Provider>,
  )
};

describe('Testing Missions Table component', () => {
  test('Check mission title', () => {
    renderComponent();
    let missionHeader = screen.getByText(/Mission/i);
    expect(missionHeader).toBeInTheDocument();
  });

  test('Check description title', () => {
    renderComponent();
    let descriptionHeader = screen.getByText(/Description/i);
    expect(descriptionHeader).toBeInTheDocument();
  });

  test('Check status in DOM', () => {
    renderComponent();
    let statusHeader = screen.getByText(/Status/i);
    expect(statusHeader).toBeInTheDocument();
  })

  test('Check if the Table is in the dom', () => { 
    renderComponent();
    let tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
  })

  test('Check if there are a group of rows', () => { 
    renderComponent();
    let rowsGroup = screen.getAllByRole('rowgroup');
    expect(rowsGroup.length).toBeGreaterThan(1);
  })

  test('Check if the row element is in the dom', () => { 
    renderComponent();
    let rowElement = screen.getByRole('row');
    expect(rowElement).toBeInTheDocument();
  })
});