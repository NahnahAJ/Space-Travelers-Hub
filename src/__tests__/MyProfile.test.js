import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import MyProfile from '../components/MyProfile';

test('renders the myProflie component snapshot', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <Provider store={store}>
        <MyProfile />
      </Provider>
    </BrowserRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
