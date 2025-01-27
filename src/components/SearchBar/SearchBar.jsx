export const SearchBar = ({ placeholder = "Search..." }) => {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder={placeholder}
            />
            <button
                className="button">
                Search
            </button>
        </div>
    )
}
