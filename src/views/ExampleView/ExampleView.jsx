import { ExampleSection } from './ExampleSection';
import { Link } from 'react-router-dom';

const ExampleView = () => {

    return (
        <div>
            <Link to="/task-board-test">
                <button>Go to test task board</button>
            </Link>
            <ExampleSection />
        </div>
    );
};

export default ExampleView;
