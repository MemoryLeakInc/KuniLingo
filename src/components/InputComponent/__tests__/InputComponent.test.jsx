import { fireEvent, render, screen } from '@testing-library/react';
import { InputComponent } from '../InputComponent';
import '@testing-library/jest-dom';

describe('InputComponent', () => {

    it('should render an input with the correct placeholder', () => {
        render(<InputComponent placeholder="Search here..." />);
        expect(screen.getByPlaceholderText("Search here...")).toBeInTheDocument();

    });

    it('should render an input wit the the default placeholder', () => {
        render(<InputComponent />);
        expect(screen.getByPlaceholderText("Type something...")).toBeInTheDocument();
    });

    it('should render with the correct value', () => {
        render(<InputComponent value="Hello" onChange={() => { }} />);
        const input = screen.getByDisplayValue("Hello");
        expect(input).toBeInTheDocument();
    });

    it('should call onChange when typing in the input', () => {
        const handleChange = vi.fn();
        render(<InputComponent value="" onChange={handleChange} />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: "Hello world" } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    })

    it('should support different input types', () => {
        render(<InputComponent type="password" />);
        const input = screen.getByPlaceholderText("Type something...");
        expect(input).toHaveAttribute("type", "password");
    });
});