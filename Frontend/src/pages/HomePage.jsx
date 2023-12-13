import Header from "../components/Header";
import HeroFood from "../components/HeroFood";
import SearchBar from "../components/SearchBar";
import FeaturedFoods from "../components/FeaturedFoods";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

import { ToastContainer } from "react-toastify";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [orderStatus, setOrderStatus] = useState({});
  const [isLocked, setIsLocked] = useState(false);
  const constraintsRef = useRef(null);

  const getOrderStatus = async (orderNumber) => {
      const getStatus = await fetch(`https://sushi-vibes.onrender.com/api/order/status/${orderNumber}`);
      const res = await getStatus.json();
      setOrderStatus(res);
      console.log(res);
      setIsLocked(res.order.locked);
  }

  useEffect(() => {
    const orderNumber = localStorage.getItem("OrderNumber");
    if(orderNumber) getOrderStatus(JSON.parse(orderNumber));
    else console.log("No order number found");
    
  }, []);


  return (
    <main className="HomePage">
      <motion.div 
        className="drag-area" 
        ref={constraintsRef}
        >
        <motion.button
          className="draggable_button"
          drag
          dragConstraints={constraintsRef}
          style={{ position: "absolute", zIndex: 1000 ,  color: '#fff', border:` 5px solid ${ isLocked ? 'red' : 'green'}`}}
        >
          Order status
        </motion.button>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Header />
        <HeroFood />
        <SearchBar
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
        <article>
          <h3>
            {selectedCategory ? selectedCategory.toUpperCase() : "TOP CHOICES"}
          </h3>
        </article>
        <FeaturedFoods selectedCategory={selectedCategory} />
      </motion.div>
      <NavBar />
    </main>
  );
}

export default HomePage;
