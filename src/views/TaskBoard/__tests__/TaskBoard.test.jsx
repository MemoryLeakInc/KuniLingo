import { ExampleTaskBoard } from "../ExampleTaskBoard"
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import i18next from '../../../i18n';
import { I18nextProvider } from 'react-i18next';

it("should render task cards inside the CardContainer", () => {
    render(<I18nextProvider i18next={i18next}>
        <BrowserRouter>
            <ExampleTaskBoard />
        </BrowserRouter>
    </I18nextProvider>
    );
    const taskCard = screen.getByText('Fregar el suelo');
    expect(taskCard).toBeInTheDocument();
});

it("should render the family name passed to CardContainer", () => {
    render(<I18nextProvider i18next={i18next}>
        <BrowserRouter>
            <ExampleTaskBoard />
        </BrowserRouter>
    </I18nextProvider>
    );
    expect(screen.getByText("Poteto family")).toBeInTheDocument();
});