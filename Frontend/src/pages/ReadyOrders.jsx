import{ React, useState } from 'react';
import Header from '../components/Header';
import '../styles/NewOrders.scss';
import WorkersNavBar from '../components/WorkersNavBar';

function ReadyOrders() {
    const [menuOpen, setMenuOpen] = useState(false);
    
    const handleMenuClick = () => {
        setMenuOpen(!menuOpen); 
    };
    
    return ( 
        <section className='orders-container'>
            <Header />
            <h1>Ready for pick-up</h1>
            
            <WorkersNavBar
                menu={{opacity: '1'}} 
                menuOpen={menuOpen} 
                onMenuClick={handleMenuClick}/>
        </section>
    );
}

export default ReadyOrders;