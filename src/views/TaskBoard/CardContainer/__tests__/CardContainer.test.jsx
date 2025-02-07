import { render, screen, waitFor } from "@testing-library/react";
import { CardContainer } from "../CardContainer";
import i18next from '../../../../i18n';
import { I18nextProvider } from 'react-i18next';

describe("CardContainer Section", () => {
    it("should render without crashing when tasks array is empty", () => {
        render(<I18nextProvider i18next={i18next}>
            <CardContainer tasks={[]} />
        </I18nextProvider>
        );
        const container = document.querySelector(".card-container");
        expect(container).toBeInTheDocument();
    });
});

describe("CardContainer Section", () => {
    it("should render TaskCard components for each task", async () => {
        const mockTasks = [
            { taskName: "Wash dishes", userName: "Alice", completed: false },
            { taskName: "Take out trash", userName: "Bob", completed: true },
        ];
  
        render(<I18nextProvider i18next={i18next}>
            <CardContainer tasks={mockTasks} />
        </I18nextProvider>
        );
  
        await waitFor(() => {
            expect(screen.getByText("Wash dishes")).toBeInTheDocument();
            expect(screen.getByText("Assigned to Alice")).toBeInTheDocument();
            expect(screen.getByText("Take out trash")).toBeInTheDocument();
            expect(screen.getByText("Assigned to Bob")).toBeInTheDocument();
        });
    });
});

it("should render an empty container when tasks array is empty", () => {
    render(<I18nextProvider i18next={i18next}>
        <CardContainer tasks={[]} />
    </I18nextProvider>
    );
    const container = document.querySelector(".card-container");
    expect(container.childElementCount).toBe(0);
});