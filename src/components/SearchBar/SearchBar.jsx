import { ButtonComponent } from "../ButtonComponent";
import { InputComponent } from "../InputComponent";

export const SearchBar = ({ placeholder = "Search...", onSearch, value, onInputChange }) => {
    return (
        <div className="search-bar">
            <InputComponent
                placeholder={placeholder}
                value={value}
                onChange={onInputChange}
            />
            <ButtonComponent
                onClick={onSearch}
                label="Search"
            />
        </div>
    );
};