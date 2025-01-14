import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ExampleView } from '../';

describe('ExampleView', () => {
    it('should render the view', () => {
        render(<ExampleView />);
        const button = screen.getByText('Click me');
        expect(button).toBeInTheDocument();
    });
});