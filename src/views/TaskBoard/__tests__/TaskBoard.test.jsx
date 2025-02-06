import {ExampleTaskBoard} from "../ExampleTaskBoard"
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

it("should render task cards inside the CardContainer", () => {
    render(
        <BrowserRouter>
            <ExampleTaskBoard />
        </BrowserRouter>
    );
    const taskCard = screen.getByText('Fregar el suelo');
    expect(taskCard).toBeInTheDocument();
});

it("should render the family name passed to CardContainer", () => {
    render(
        <BrowserRouter>
            <ExampleTaskBoard />
        </BrowserRouter>);
    expect(screen.getByText("Poteto family")).toBeInTheDocument();
});