import React from "react";
import { useState } from "react";

function SearchBar({setSelectedCategory, selectedCategory}) {



    return ( 
        <section className="SearchBarContainer">
            <div className="SearchBar">
                <div className="input-wrapper">
                    <input type="text" />
                    <button></button>
                </div>
            </div>
                <ul>
                    <li onClick={() => setSelectedCategory(selectedCategory === 'starters' ? '' : 'starters')}> 
                        <img
                            className={selectedCategory === 'starters' ? 'active' : ''} 
                            src="../assets/icons/Zongzi.svg/" alt="" />
                        <a>starters</a>
                    </li>
                    <li onClick={() => setSelectedCategory(selectedCategory === 'main' ? '' : 'main')}>
                        <img 
                            className={selectedCategory === 'main' ? 'active' : ''}
                            src="../assets/icons/Sushi.svg/" alt="" />
                        <a>main</a>
                    </li>
                    <li onClick={() => setSelectedCategory(selectedCategory === 'sides' ? '' : 'sides')}>
                    <img 
                        className={selectedCategory === 'sides' ? 'active' : ''}
                        src="../assets/icons/Baozi.svg/" alt="" />
                        <a>sides</a>
                    </li>
                    <li onClick={() => setSelectedCategory(selectedCategory === 'dessert' ? '' : 'dessert')}>
                    <img 
                        className={selectedCategory === 'dessert' ? 'active' : ''}
                        src="../assets/icons/Pudding.svg/" alt="" />
                        <a>dessert</a>
                    </li>
                    <li onClick={() => setSelectedCategory(selectedCategory === 'drinks' ? '' : 'drinks')}>
                    <img 
                        className={selectedCategory === 'drinks' ? 'active' : ''}
                        src="../assets/icons/Drink.svg/" alt="" />
                        <a>drinks</a>
                    </li>
                </ul>

        </section>
     );
}

export default SearchBar;