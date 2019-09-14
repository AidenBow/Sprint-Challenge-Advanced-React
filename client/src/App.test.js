import React from 'react';
import { render } from '@testing-library/react';
import App from './App.js';
import PlayerList from './components/PlayerList'
import { DarkToggle } from "./hooks/useDarkMode"

it('renders without crashing', () => {
  render(<App/>)
});

test("darkmode button rendered", () => {
  const { getByText } = render(<App />);
  getByText("Dark Mode")
})

test("dark mode changes", () => {
  expect(DarkToggle(true)).toBe(false)
})

test("player list rendered", () => {
  render(<PlayerList />);
})
