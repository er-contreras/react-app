import React from 'react';
import Navbar from '../components/Navbar';
import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';

it('Should render same text passed into ...', () => {
  const tree = TestRenderer.create(<Navbar />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders the main heading', () => {
  render(<Navbar />);
  const headingElement = screen.getByText(/^Math Magicians$/i);

  expect(headingElement).toBeInTheDocument();
});