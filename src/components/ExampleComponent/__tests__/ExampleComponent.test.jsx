import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ExampleComponent } from '../ExampleComponent.jsx';
import '@testing-library/jest-dom';

describe('ExampleComponent', () => {
    it('should render the button with the correct label', () => {
        render(<ExampleComponent label="Click me" onClick={() => {}} />);
        const button = screen.getByText('Click me');
        expect(button).toBeInTheDocument();
    });

    it('should call the onClick handler when clicked', async () => {
        const handleClick = vi.fn();
        render(<ExampleComponent label="Click me" onClick={handleClick} />);
        const button = screen.getByText('Click me');
        await userEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
