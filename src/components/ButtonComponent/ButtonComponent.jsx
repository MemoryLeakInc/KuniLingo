export const ButtonComponent = ({ onClick, label }) => {
    return (
        <button className='button-component' onClick={onClick}>
            {label}
        </button>
    );
};
