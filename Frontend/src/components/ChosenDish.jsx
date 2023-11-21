import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import QuantitySelector from "./QuantitySelector";

export function Overlay({ close }) {
  //   const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });

  const price = 130;

  //   const handleSwiper = (swiper) => {
  //     swiper.on("slideChange", () => {
  //       if (swiper.activeIndex === 1) {
  //         close();
  //       }
  //     });
  //   };

  //   const handleTouchStart = (e) => {
  //     setTouchStart({
  //         x: e.targetTouches[0].clientX,
  //         y: e.targetTouches[0].clientY
  //     });

  //   };

  //   const handleTouchEnd = (e) => {
  //     const touchEnd = {
  //         x: e.changedTouches[0].clientX,
  //         y: e.changedTouches[0].clientY
  //     };

  //     const xMove = Math.abs(touchEnd.x - touchStart.x);
  //     const yMove = touchStart.y - touchEnd.y;

  //     if (yMove > 150 && xMove < 50) {
  //       close();
  //     }
  //   };

  const overlayVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
    exit: { scale: 0 },
  };

  return (
    <AnimatePresence>
      <motion.main
        className="overlay"
        // onTouchStart={handleTouchStart}
        // onTouchEnd={handleTouchEnd}
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
            className="close_btn"
          style={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={close}
        >
          
        </button>
        <img src="../assets/img/mat.svg" alt="" />
        <section className="ChosenDishContainer">
          <div className="ChosenDishInfo">
            <h3>Sushi</h3>
            <div className="ChosenDishInfo_container">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quia, voluptates, quos quod voluptate
                dolorum voluptatibus aperiam quibusdam aspernatur consequuntur
                exercitationem?
              </p>
              <div className="ChosenDishDescription">
                <p>12pc mix</p>
                <p>Gluten free</p>
              </div>
            </div>
            <div className="QuantitySelector">
              <QuantitySelector price={price} />
            </div>
            <div></div>
            <div className="ChosenDishAdd">
              <button className="add_btn"></button>
            </div>
          </div>
        </section>
      </motion.main>
    </AnimatePresence>
  );
}
