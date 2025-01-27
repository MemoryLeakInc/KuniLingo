import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '../SearchBar.jsx';
import '@testing-library/jest-dom';

describe('SearchBar', () => {

    it('should render a search bar with input', () => {
        render(<SearchBar placeholder='Search something ...' />)
        expect(screen.getByPlaceholderText("Search something ...")).toBeInTheDocument();
    })

    it('should render a button and handle clicks', () => {
        render (<SearchBar placeholder="Search Something ..." />);
        const button = screen.getByRole('button', {name: /search/i });
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
    })

    it('should renders with a dynamic placeholder', () => {
        const placeholderText = "Find your favorite items";
        render(<SearchBar placeholder={placeholderText} />);

        expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();
    })

    it('should allow typing in the input field', () => {
        render(<SearchBar placeholder="Type here..." />);
        const input = screen.getByPlaceholderText("Type here...");
        fireEvent.change(input, { target: { value: "Hello world" } });
        expect(input.value).toBe("Hello world");
    })
})