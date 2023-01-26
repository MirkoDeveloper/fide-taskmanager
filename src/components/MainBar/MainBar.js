import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Account from "../Account/Account";

const MainBar = () => {
    return (
        <div className="fd-mainbar fd-shadow">
            <div className="fd-mainbar__left">
                <SearchBar />
            </div>
            <div className="fd-mainbar__right">
                <Account />
            </div>
        </div>
    );
};

export default MainBar;
