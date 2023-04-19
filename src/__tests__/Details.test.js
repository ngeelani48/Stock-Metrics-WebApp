import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import DetailsExchange from '../components/Details';
import store from '../redux/store';

describe('Test Details Route', () => {
  it('Test if Details section renders', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <DetailsExchange />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
  it('Test if it renders a specific element', () => {
    render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <DetailsExchange />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    const linkElement = screen.getByText(/No Details/i);
    expect(linkElement).toBeInTheDocument();
  });
});
