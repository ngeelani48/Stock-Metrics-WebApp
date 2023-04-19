import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

it('test Navbar rendering', () => {
  render(
    <Router>
      <Navbar />
    </Router>,
  );
  const tree = renderer
    .create(
      <Router>
        <Navbar />
      </Router>,
    )
    .toJSON();
  const title = screen.getByRole('heading', { name: /Forex Exchange/i });
  const navbars = screen.getAllByRole('link');
  expect(title.textContent).toBe('Forex Exchange');
  expect(navbars).toHaveLength(1);
  expect(tree).toMatchSnapshot();
});
