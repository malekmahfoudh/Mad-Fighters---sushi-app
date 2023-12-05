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
        <>
            <Header />
            <h2>Ready for pick-up</h2>
            
            <WorkersNavBar
                menu={{opacity: '1'}} 
                menuOpen={menuOpen} 
                onMenuClick={handleMenuClick}/>
        </>
    );
}

export default ReadyOrders;