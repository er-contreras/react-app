import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from '../App';

describe('App test', () => {
  it('Should render same text passed into ...', () => {
    const tree = TestRenderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
