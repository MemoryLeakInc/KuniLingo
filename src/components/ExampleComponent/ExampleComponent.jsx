export const ExampleComponent = ({ onClick, label }) => {
    return (
        <button className='example-component-test' onClick={onClick}>
            {label}
        </button>
    );
};
