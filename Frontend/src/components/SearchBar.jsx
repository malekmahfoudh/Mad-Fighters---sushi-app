import React from "react";

function SearchBar() {
    return ( 
        <section className="SearchBarContainer">
            <div className="SearchBar">
                <div className="input-wrapper">
                    <input type="text" />
                    <button></button>
                </div>
            </div>
                <ul>
                    <li>
                        <img src="../assets/icons/Zongzi.svg/" alt="" />
                        <a>starters</a>
                    </li>
                    <li className="mains">
                        <img src="../assets/icons/Sushi.svg/" alt="" />
                        <a>mains</a>
                    </li>
                    <li>
                    <img src="../assets/icons/Baozi.svg/" alt="" />
                        <a>sides</a>
                    </li>
                    <li>
                    <img src="../assets/icons/Pudding.svg/" alt="" />
                        <a>desserts</a>
                    </li>
                    <li>
                    <img src="../assets/icons/Drink.svg/" alt="" />
                        <a>drinks</a>
                    </li>
                </ul>

        </section>
     );
}

export default SearchBar;