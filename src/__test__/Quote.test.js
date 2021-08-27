import React from 'react';
import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Quote from '../pages/Quote';

describe('Quote test', () => {
  it('Should render same text passed into ...', () => {
    const tree = TestRenderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the main Text', () => {
    render(<Quote />);
    const heading = screen.getByText(/William Paul Thurston/i);
    expect(heading).toMatchSnapshot();
  });
})