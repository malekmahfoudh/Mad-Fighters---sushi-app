import Header from '../components/Header';
import NavBar from '../components/NavBar';
import HorizontalFoodCard from '../components/HorizontalFoodCard';

function Cart() {
    return ( 
        <section className='CartContainer'>
            <Header />
            <HorizontalFoodCard/>
            <HorizontalFoodCard/>
            <input type="text" placeholder='Add comment to the chef...' />
            <h2>Total: (sum)</h2>
            <button>Place order</button>
            <NavBar 
          cart={{opacity: '1'}}
        />
        </section>
     );
}

export default Cart;