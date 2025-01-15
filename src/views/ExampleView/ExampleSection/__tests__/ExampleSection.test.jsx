import { render, screen } from '@testing-library/react';
import { ExampleSection } from '../ExampleSection';
import { expect } from 'vitest';
import i18next from '../../../../i18n'
import { I18nextProvider } from 'react-i18next';

describe('ExampleSection component', () => {
    it('should render with correct text and a button', () => {
        render(<I18nextProvider i18next={i18next}>
            <ExampleSection />
        </I18nextProvider>);
        const sectionText = screen.getByText("I'm a section");
        const button = screen.getByRole('button', { name: /Click/ });
        expect(sectionText).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });
});