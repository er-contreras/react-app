import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

describe('Home test', () => {
  it('Should render same text passed into ...', () => {
    const tree = TestRenderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the main heading', () => {
    render(<Home />);
    const heading = screen.getByText(/Welcome to our page!/i);
    expect(heading).toMatchSnapshot();
  });
})