import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('Navbar test', () => {
  it('Should render same text passed into ...', () => {
    const tree = TestRenderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the main heading', () => {
    render(<Navbar />);
    const heading = screen.getByText(/Math Magicians/i);
    expect(heading).toMatchSnapshot();
  });

  it('Test Home', () => {
    render(<Navbar />);
    const heading = screen.getByText(/Home/i);
    expect(heading).toMatchSnapshot();
  });

  it('Test Calculator', () => {
    render(<Navbar />);
    const heading = screen.getByText(/Calculator/i);
    expect(heading).toMatchSnapshot();
  });

  it('Test Quote', () => {
    render(<Navbar />);
    const heading = screen.getByText(/Quote/i);
    expect(heading).toMatchSnapshot();
  });
});
