import PropTypes from 'prop-types';

export const ExampleComponent = ({ onClick, label }) => {
    return (
        <button className='example-component' onClick={onClick}>
            {label}
        </button>
    );
};

ExampleComponent.propTypes = {      //PropTypes validations (fixing - 1:36  error  'onClick' is missing in props validation  react/prop-types )
    onClick: PropTypes.func.isRequired, 
    label: PropTypes.string.isRequired, 
};