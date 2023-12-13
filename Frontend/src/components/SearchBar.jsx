import React from "react";
import { motion } from "framer-motion";

function SearchBar({ setSelectedCategory, selectedCategory }) {
  return (
<motion.section 
  className="SearchBarContainer"
  initial={{ opacity: 0, scaleX: 0 }}
  animate={{ opacity: 1, scaleX: 1 }}
  transition={{ 
    type: "spring",
    stiffness: 110,
    damping: 15,
    mass: .5,
    velocity: .5,
    staggerChildren: 5, // Add this line
  }}
>
  <motion.ul>
    <motion.li
      initial={{ opacity: 0, x: 250 }} // Start from the right
      animate={{ opacity: 1, x: 0 }} // Move to the original position
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 1,
      }}
      onClick={() =>
        setSelectedCategory(
          selectedCategory === "starters" ? "" : "starters"
        )
      }
    >
      <img
        className={selectedCategory === "starters" ? "active" : ""}
        src="../assets/icons/Zongzi.svg/"
        alt=""
      />
      <a>starters</a>
    </motion.li>
    <motion.li
      initial={{ opacity: 0, x: 200 }} // Start from the right
      animate={{ opacity: 1, x: 0 }} // Move to the original position
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 1,
      }}
      onClick={() =>
        setSelectedCategory(selectedCategory === "main" ? "" : "main")
      }
    >
      <img
        className={selectedCategory === "main" ? "active" : ""}
        src="../assets/icons/Sushi.svg/"
        alt=""
      />
      <a>main</a>
    </motion.li>
    <motion.li
      initial={{ opacity: 0, x: 150 }} // Start from the right
      animate={{ opacity: 1, x: 0 }} // Move to the original position
      transition={{ 
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 1,
      }}
      onClick={() =>
        setSelectedCategory(selectedCategory === "sides" ? "" : "sides")
      }
    >
      <img
        className={selectedCategory === "sides" ? "active" : ""}
        src="../assets/icons/Baozi.svg/"
        alt=""
      />
      <a>sides</a>
    </motion.li>

        <motion.li
        initial={{ opacity: 0, x: 100 }} // Start from the right
        animate={{ opacity: 1, x: 0 }} // Move to the original position
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 10,
          mass: 1,
          velocity: 1,
        }}
          onClick={() =>
            setSelectedCategory(selectedCategory === "dessert" ? "" : "dessert")
          }
        >
          <img
            className={selectedCategory === "dessert" ? "active" : ""}
            src="../assets/icons/Pudding.svg/"
            alt=""
          />
          <a>dessert</a>
        </motion.li>
        <motion.li
        initial={{ opacity: 0, x: 50 }} // Start from the right
        animate={{ opacity: 1, x: 0 }} // Move to the original position
        transition={{ 
          type: "spring",
          stiffness: 100,
          damping: 10,
          mass: 1,
          velocity: 1,
        }}
          onClick={() =>
            setSelectedCategory(selectedCategory === "drinks" ? "" : "drinks")
          }
        >
          <img
            className={selectedCategory === "drinks" ? "active" : ""}
            src="../assets/icons/Drink.svg/"
            alt=""
          />
          <a>drinks</a>
        </motion.li>
      </motion.ul>
    </motion.section>
  );
}

export default SearchBar;
