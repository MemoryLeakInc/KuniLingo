export const ExampleComponent = ({ onClick, label }) => {
    return (
        <button className='example-component' onClick={onClick}>
            {label}
        </button>
    );
};
