import React, {useEffect, useState} from 'react';

const Ex_info=()=>{
  const [fromCurrency, setFromCurrency] = useState('NGN');
   const [toCurrency, setToCurrency] = useState('CAD');
   const [rate, setRate] = useState(null);
   const [exchangeData, setExchangeData] = useState({});
 const [cadToNgnRate, setCadToNgnRate] = useState(null);


 

    return(
        <>
               <marquee
  className="text-center "
  style={{
    background:'#c8cce5',
    position: 'fixed',
    zIndex: '20000',
    color:'blue',
    top: '0',
    borderRadius: '0',
    marginBottom: '1rem',
    fontFamily: 'poppins',
  }}
>
  <b>
    Today's Rate: 1 CAD is Selling for{' '}
    {cadToNgnRate ? ` NGN ${cadToNgnRate.toLocaleString(undefined, { maximumFractionDigits: 2 })}` : '...'}
  </b>

  
</marquee>
        </>
    );
}
export default Ex_info