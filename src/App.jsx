import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ExampleView } from './views'
import { ExampleTaskBoard } from "./views/TaskBoard/ExampleTaskBoard";
import './App.css'



function App() {



    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<ExampleView />} />
                    <Route path="/task-board-test" element={<ExampleTaskBoard />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
