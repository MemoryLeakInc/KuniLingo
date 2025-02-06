
import { Link } from "react-router-dom";
import { CardContainer } from "./CardContainer";

export const ExampleTaskBoard = () => {
    const tasks = [
        { taskName: "Fregar el suelo", userName: "Vicente", completed: false},
        { taskName: "Cambiar Arenero", userName: "Esther", completed: false},
        { taskName: "Limpiar Cocina", userName: "Vicente", completed: false},
        { taskName: "Quitar polvo comedor", userName: "Esther", completed: false},
        { taskName: "Poner lavadora", userName: "Vicente", completed: false},
        { taskName: "Lavar los platos", userName: "Vicente", completed: false},
    ]


    return (
        <div>
            <Link to="/">
                <button>Go Back Home</button>
            </Link>
            <CardContainer tasks={tasks} familyName={"Poteto"} />
        </div>
    );
};