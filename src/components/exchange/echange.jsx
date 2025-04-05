import React, { useState, useEffect } from 'react';
import Flag from 'react-world-flags';
import './exchange.css';

function Exchange() {
  const [exchangeRates, setExchangeRates] = useState({});
  const [amount, setAmount] = useState('');
  const [baseCurrency, setBaseCurrency] = useState('NGN');
  const [targetCurrency, setTargetCurrency] = useState('USD');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        if (!response.ok) {
          throw new Error('Failed to fetch exchange rates');
        }
        const data = await response.json();
        setExchangeRates(data.rates);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchExchangeRates();
  }, [baseCurrency]);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    if (exchangeRates[targetCurrency] && value) {
      setConvertedAmount((value * exchangeRates[targetCurrency]).toFixed(2));
    } else {
      setConvertedAmount(null);
    }
  };

  const handleBaseCurrencyChange = (e) => {
    const currency = e.target.value;
    setBaseCurrency(currency);
    setAmount('');
    setConvertedAmount(null);
  };

  const handleTargetCurrencyChange = (e) => {
    const currency = e.target.value;
    setTargetCurrency(currency);
    if (exchangeRates[currency] && amount) {
      setConvertedAmount((amount * exchangeRates[currency]).toFixed(2));
    } else {
      setConvertedAmount(null);
    }
  };

  const getCountryCode = (currency) => {
    const codes = {
      NGN: 'NG',
      USD: 'US',
      EUR: 'EU',
      // Add more currency to country code mappings as needed
    };
    return codes[currency] || currency.substring(0, 2);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="exchange-container">
<div className="inner">
       
 <div className="exchange">
  <h1>hello</h1>
 <div className="exchange-card">
        <div className="exchange-input">
          <select id="baseCurrency" value={baseCurrency} onChange={handleBaseCurrencyChange}>
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <Flag code={getCountryCode(baseCurrency)} className="flag-icon" />
        </div>
        <div className="exchange-input">
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            placeholder={`Amount in ${baseCurrency}`}
          />
        </div>
      </div>
 </div>
     <div className="arrows">
        <span>&#8594;</span>
        <span>&#8594;</span>
      </div>
  
  <div className="exchange">
    <h1>hello</h1>
  <div className="exchange-card">
        <div className="exchange-currency">
          <select id="targetCurrency" value={targetCurrency} onChange={handleTargetCurrencyChange}>
            {Object.keys(exchangeRates).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
          <Flag code={getCountryCode(targetCurrency)} className="flag-icon" />
        </div>
        <div className="exchange-output">
          <p>{convertedAmount !== null ? `${targetCurrency} ${convertedAmount}` : 'Enter an amount'}</p>
        </div>
      </div>
  </div>
</div>


 <div className="d-flex align-items-center justify-content-center ad">
  <span>hello, this is pharset stuffs</span>
 </div>
       </div>
    
   
  );
}

export default Exchange;