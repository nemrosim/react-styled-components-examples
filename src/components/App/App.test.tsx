import React from 'react';
import { render, screen, prettyDOM } from '@testing-library/react';
import { App } from './App';

test('renders learn react link', () => {
    const { container } = render(<App />);
    console.log(prettyDOM(container));
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
