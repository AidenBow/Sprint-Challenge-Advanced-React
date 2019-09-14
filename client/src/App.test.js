import React from 'react';
import { render } from '@testing-library/react';
import App from './App.js';

it('renders without crashing', () => {
  render(<App/>)
});
