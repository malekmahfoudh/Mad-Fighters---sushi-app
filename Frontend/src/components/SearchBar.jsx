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
            <section className='list__names'>
                <p>starters</p>
                <p>mains</p>
                <p>sides</p>
                <p>desserts</p>
                <p>drinks</p>
            </section>
        </main>
     );
}

export default SearchBar;