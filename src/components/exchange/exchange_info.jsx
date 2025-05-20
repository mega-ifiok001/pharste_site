import React, {useEffect, useState} from 'react';

const Ex_info=()=>{
  const [fromCurrency, setFromCurrency] = useState('NGN');
   const [toCurrency, setToCurrency] = useState('CAD');
   const [rate, setRate] = useState(null);
   const [exchangeData, setExchangeData] = useState({});
 const [cadToNgnRate, setCadToNgnRate] = useState(null);


 
   useEffect(() => {
     const fetchExchangeRate = async () => {
       try {
         const res = await fetch('https://api.coderigi.co/api/rates');
         const json = await res.json();
 
         if (json.status && json.data) {
           setExchangeData(json.data);
 
         
 
           const rateValue = json.data[fromCurrency]?.[toCurrency];
           console.log(`${fromCurrency} → ${toCurrency} rate:`, rateValue);
 
           if (rateValue != null) setRate(rateValue);
           else setRate(null);
 
         }
       } catch (error) {
         console.error('Failed to fetch exchange rate:', error);
         setRate(null);
       }
     };
 
     fetchExchangeRate();
   }, [fromCurrency, toCurrency]);
 
 
 
   useEffect(() => {
     if (!amount || !rate) {
       setConverted('');
       return;
     }
     const result = parseFloat(amount) * rate;
     setConverted(result.toFixed(2));
   }, [amount, rate]);
 
   const handleAmountChange = (e) => {
     const raw = e.target.value.replace(/[^\d.]/g, '');
     setAmount(raw);
   };
   const handleFromChange = (e) => {
     const newFrom = e.target.value;
     setFromCurrency(newFrom);
 
     // Automatically switch toCurrency to the other currency
     if (newFrom === 'NGN') setToCurrency('CAD');
     else if (newFrom === 'CAD') setToCurrency('NGN');
   };
 
   const handleToChange = (e) => setToCurrency(e.target.value);
 

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