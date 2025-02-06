import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ExampleView } from '../';
import i18next from '../../../i18n';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

describe('ExampleView', () => {
    it('should render the view', () => {
        render(<I18nextProvider i18next={i18next}>
            <BrowserRouter>
                <ExampleView />
            </BrowserRouter>
        </I18nextProvider>);
        const button = screen.getByText('Click me');
        expect(button).toBeInTheDocument();
    });
});