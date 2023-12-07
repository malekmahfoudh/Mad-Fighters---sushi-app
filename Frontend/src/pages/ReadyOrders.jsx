import{ React, useState } from 'react';
import Header from '../components/Header';
import '../styles/NewOrders.scss';
import WorkersNavBar from '../components/WorkersNavBar';

function ReadyOrders() {

    return ( 
        <>
            <Header />
            <h2>Ready for pick-up</h2>
            <WorkersNavBar />
        </>
    );
}

export default ReadyOrders;