import{ React, useState } from 'react';
import Header from '../components/Header';
import '../styles/NewOrders.scss';
import WorkersNavBar from '../components/WorkersNavBar';

function PreparingOrders() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const handleMenuClick = () => {
        setMenuOpen(!menuOpen); 
    };
    
    return ( 
        <section className='orders-container'>
            <Header />
            <h1>Preparing orders</h1>
            
            <WorkersNavBar
            menu={{opacity: '1'}} 
            menuOpen={menuOpen} 
            onMenuClick={handleMenuClick}/>
        </section>
     );
}

export default PreparingOrders;