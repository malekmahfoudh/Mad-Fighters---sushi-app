function AmountIcon({amount, style}) {
    return ( 
        <div className="circle" style={style}>
            <p>{amount}</p>
        </div>
     );
}

export default AmountIcon;