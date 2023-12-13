import Header from "../components/Header";
import HeroFood from "../components/HeroFood";
import SearchBar from "../components/SearchBar";
import FeaturedFoods from "../components/FeaturedFoods";
import StatusOverlay from "../components/StatusOverlay";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

import { ToastContainer } from "react-toastify";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [orderStatus, setOrderStatus] = useState({});
  const [isLocked, setIsLocked] = useState(false);
 
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const constraintsRef = useRef(null);
  const getOrderStatus = async (orderNumber) => {
      setIsLoading(true);
      const getStatus = await fetch(`https://sushi-vibes.onrender.com/api/order/status/${orderNumber}`);
      const res = await getStatus.json();
      setOrderStatus (await res);
      setIsLoading(false);
      setIsLocked(res.order.locked);
  }



   function handleOverlay(){
    setIsOverlayOpen(!isOverlayOpen);

  }

  function orderStatusColor() {
    if (orderStatus?.order?.status === 'pending') {
      return {borderColor: "red"};
    }
    if (orderStatus?.order?.status === 'verified') {
      return {borderColor: "orange"};
    }
    if (orderStatus?.order?.status === 'done') {
      return {borderColor: "green"};
    }

  }
  useEffect(() => {
    const orderNumber = localStorage.getItem("OrderNumber");
    if(orderNumber) getOrderStatus(JSON.parse(orderNumber));
    else console.log("No order number found");
  }, []);

  
  return (
    <main className="HomePage">
      {isLoading ? <p className="loading">Loading..</p> : (
        <motion.div 
        className="drag-area" 
        ref={constraintsRef}
        >
        <motion.button
          className="draggable_button"
          drag
          dragConstraints={constraintsRef}
          style={orderStatusColor()}
          onClick={handleOverlay}
          whileHover={{
            scale: 1.2,
            transition: {ease:'easeInOut', duration: .2 },
          }}
        >
          {isOverlayOpen ? 'Close' : 'Order Status'}
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



      )}
      
      <NavBar />
      {isOverlayOpen ? <StatusOverlay order={orderStatus} orderStatusColor={orderStatusColor} locked={isLocked} /> : '' } 
    </main>
  );
}

export default HomePage;
