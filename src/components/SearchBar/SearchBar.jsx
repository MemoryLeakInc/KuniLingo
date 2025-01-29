import { useState } from "react";
import { ButtonComponent } from "../ButtonComponent";
import { InputComponent } from "../InputComponent";

export const SearchBar = ({ placeholder = "Search...", value}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchMessage, setSearchMessage] = useState("");

    const handleSearch = () => {
        setSearchMessage(`You searched: ${searchTerm || "nothing"}`);
    };
    return (
        <div className="search-bar">
            <InputComponent
                placeholder={placeholder}
                value={value}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ButtonComponent
                onClick={handleSearch}
                label="Search"
            />
            {searchMessage && <p>{searchMessage}</p>}
        </div>
    );
};