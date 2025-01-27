export const InputComponent = ({ placeholder = "Type something...", value, onChange, type="text" }) => {
    return (
        <input
            type={type}
            className="input-component"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}