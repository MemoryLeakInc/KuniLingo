import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { ExampleView } from '../';

describe('ExampleView', () => {
    it('should render the view', () => {
        render(<ExampleView />);
        const button = screen.getByText('Click me');
        expect(button).toBeInTheDocument();
    });
});