import { render, screen, fireEvent} from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { TaskCard } from "../TaskCard";
import i18next from '../../../i18n';
import { I18nextProvider } from 'react-i18next';

describe("TaskCard Component", () => {
    it("should render correctly task name and user name", () => {
        render(<I18nextProvider i18next={i18next}>
            <TaskCard taskName="Buy milk" userName="Juan" />
        </I18nextProvider>
        );

        expect(screen.getByText("Buy milk")).toBeInTheDocument();
        expect(screen.getByText("Assigned to Juan")).toBeInTheDocument();
    });

    it("should have the class completed when task is completed", () => {
        render(<TaskCard taskName="Full house vacuum clean" userName="Luis" />);

        const taskCard = screen.getByText("Full house vacuum clean").closest(".task-card-box");
        const button = screen.getByRole("button");


        expect(taskCard).not.toHaveClass("completed");


        fireEvent.click(button);
        expect(taskCard).toHaveClass("completed");


        fireEvent.click(button);
        expect(taskCard).not.toHaveClass("completed");
    });
});