import { render, screen } from '@testing-library/react';
import { ExampleSection } from '../ExampleSection';
import { expect } from 'vitest';

describe('ExampleSection component', () => {
    it('should render with correct text and a button', () => {
        render(<ExampleSection />);
        const sectionText = screen.getByText("I'm a section");
        const button = screen.getByRole('button', { name: /Click/ });
        expect(sectionText).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });
});