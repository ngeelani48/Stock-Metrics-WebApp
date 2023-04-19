import React from 'react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import ForexList from '../components/forexList';

describe('Test The Home Route', () => {
  it('test if the Forexlist renders properly', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <ForexList />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('By default should have 0 length', () => {
    const { container } = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <ForexList />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    const forexs = container.getElementsByClassName('forexs-container');
    expect(forexs.length).toBe(0);
  });
  it('Test if click event works properly', () => {
    render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <ForexList />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    const linkElement = screen.getByText(/Loading.../i);
    expect(linkElement).toBeInTheDocument();
  });
});
