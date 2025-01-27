import { fireEvent, render, screen } from '@testing-library/react';
import { Form } from '../Form';
import '@testing-library/jest-dom';

describe('Form', () => {
    const mockFields = [
        {
            name: 'username',
            label: 'Username',
            type: 'text',
            placeholder: 'Enter username',
            required: true,
        },
        {
            name: 'password',
            label: 'Password',
            type: 'password',
            placeholder: 'Enter password',
            required: true,
        },
    ];

    const mockOnSubmit = vi.fn();

    it('should render the form with the given fields', () => {
        render(<Form fields={mockFields} />);
        expect(screen.getByLabelText('Username')).toBeInTheDocument();
        expect(screen.getByLabelText('Password')).toBeInTheDocument();
    });

    it('should render the submit button with the correct text', () => {
        render(<Form fields={mockFields} buttonText="Login" />);
        expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
    });

    it('should call onSubmit with the correct data when submitted', () => {
        render(<Form fields={mockFields} onSubmit={mockOnSubmit} />);
        fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'testuser' } });
        fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });
        fireEvent.click(screen.getByRole('button', { name: 'Submit' }));

        expect(mockOnSubmit).toHaveBeenCalledTimes(1);
        expect(mockOnSubmit).toHaveBeenCalledWith({
            username: 'testuser',
            password: 'password123',
        });

    });

    it('should use default values for missing field properties', () => {
        const fields = [{ name: 'email', label: 'Email' }];
        render(<Form fields={fields} />);
        const input = screen.getByLabelText('Email');

        expect(input).toHaveAttribute('type', 'text');
        expect(input).toHaveAttribute('placeholder', '');
        expect(input).not.toBeRequired();
    });
});