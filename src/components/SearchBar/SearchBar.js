import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
    return (
        <form className="fd-form">
            <div className="fd-form__input search">
                <BiSearch />
                <input type="text" placeholder="Search"></input>
            </div>
        </form>
    );
};

export default SearchBar;
