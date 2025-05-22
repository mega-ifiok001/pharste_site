import React, { useEffect, useState } from 'react';

const Ex_info = () => {
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

          // Set general rate based on selected currencies
          const rateValue = json.data[fromCurrency]?.[toCurrency];
          console.log(`${fromCurrency} → ${toCurrency} rate:`, rateValue);

          if (rateValue != null) setRate(rateValue);
          else setRate(null);

          // Set CAD to NGN rate for the marquee
          const cadToNgn = json.data['CAD']?.['NGN'];
          setCadToNgnRate(cadToNgn || null);
        }
      } catch (error) {
        console.error('Failed to fetch exchange rate:', error);
        setRate(null);
        setCadToNgnRate(null);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  return (
    <>
      <marquee
        className="text-center "
        style={{
          background: '#c8cce5',
          position: 'fixed',
          zIndex: '20000',
          color: 'blue',
          top: '0',
          borderRadius: '0',
          marginBottom: '1rem',
          fontFamily: 'poppins',
        }}
      >
        <b>
          Today's Rate: 1 CAD is Selling for{' '}
          {cadToNgnRate !== null
            ? ` NGN ${cadToNgnRate.toLocaleString(undefined, { maximumFractionDigits: 2 })}`
            : '...'}
        </b>
      </marquee>
    </>
  );
};

export default Ex_info;