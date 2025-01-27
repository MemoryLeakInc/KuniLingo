export const Form = ({ fields = [], buttonText = "Submit", onSubmit }) => {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        onSubmit?.(data);
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            {fields.map((field, index) => (
                <div key={index} className="form-group">
                    <label htmlFor={field.name} className="block">
                        {field.label}
                    </label>
                    <input
                        type={field.type || 'text'}
                        id={field.name}
                        name={field.name}
                        placeholder={field.placeholder || ''}
                        required={field.required || false}
                    />
                </div>
            ))}
            <button
                type="submit"
                className="form-button"
            >
                {buttonText}
            </button>
        </form>
    )
}