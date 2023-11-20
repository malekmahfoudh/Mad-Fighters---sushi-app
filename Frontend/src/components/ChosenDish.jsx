import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Overlay({ close }) {
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientY)
    };

    const handleTouchEnd = (e) => {
        setTouchEnd(e.changedTouches[0].clientY)
        if (touchStart - touchEnd > 150) {
            close()
        }
    }

    const overlayVariants = {
        hidden: { scale: 0 },
        visible: { scale: 1 },
        exit: { scale: 0 }
    };

  return (
    <AnimatePresence>
        <motion.main 
            className="overlay" 
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
        <img src="../assets/img/mat.svg" alt="" />
        <section className="ChosenDishContainer">
            <div className="ChosenDishInfo">
            <h3>Sushi</h3>
            <div className="ChosenDishInfo_container">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptatum, quia, voluptates, quos quod voluptate dolorum
                voluptatibus aperiam quibusdam aspernatur consequuntur
                exercitationem?
                </p>
                <div className="ChosenDishDescription">
                <p>12pc mix</p>
                <p>Gluten free</p>
                </div>
            </div>
            <div>

            </div>
            <div className="ChosenDishAdd">
                <button></button>
            </div>
            </div>
        </section>
        </motion.main>
    </AnimatePresence>
  );
}
