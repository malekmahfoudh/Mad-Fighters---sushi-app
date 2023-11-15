import React from "react";

function SearchBar() {
    return ( 
        <main className="SearchBarContainer">
            <div className="SearchBar">
                <div className="SearchBar__input">
                    <input type="text" />
                    <button></button>
                </div>
            </div>
                <ul>
                    <li className="starters"></li>
                    <li className="mains"></li>
                    <li className="sides"></li>
                    <li className="desserts"></li>
                    <li className="drinks"></li>
                </ul>
        </main>
     );
}

export default SearchBar;