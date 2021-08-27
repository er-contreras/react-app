import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Calculator test', () => {
  it('Should render same text passed into ...', () => {
    const tree = TestRenderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the main heading', () => {
    render(<Calculator />);
    const heading = screen.getByText(/Lets do some math/i);
    expect(heading).toMatchSnapshot();
  });

  it('Test AC', () => {
    render(<Calculator />);
    const allClear = screen.getByText(/AC/i);
    expect(allClear).toMatchSnapshot();
  });

  it('Test +/-', () => {
    render(<Calculator />);
    const simbol = screen.getByText('+/-');
    expect(simbol).toMatchSnapshot();
  });

  it('Test %', () => {
    render(<Calculator />);
    const quantity = screen.getByText(/%/i);
    expect(quantity).toMatchSnapshot();
  });
})