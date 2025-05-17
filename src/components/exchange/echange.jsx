import React, { useState, useEffect } from 'react';
import DownArrow from '../../asset/chevron-down.png';
import Dropdown from '../../asset/Dropdown.png';
import './exchange.css';
import flag_ngn from '../../asset/flag-ngn.png';
import flag_cad from '../../asset/flag-cad.png';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [converted, setConverted] = useState('');
  const [fromCurrency, setFromCurrency] = useState('NGN');
  const [toCurrency, setToCurrency] = useState('CAD');
  const [rate, setRate] = useState(null);
  const [exchangeData, setExchangeData] = useState({});

  const currencySymbols = {
    CAD: 'CA$',
    NGN: '₦',
  };

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

  return (
    <>
      <div className="container-md text-light min-vh-auto desktop_rate">
        <div className="row w-70 p-3 exc" style={{ background: '#000', borderRadius: '40px' }}>
          <div className="col-md-5 mb-4">
            <h5 className="grey-text">If you send</h5>
            <div className="card text-light p-3">
              <div className="card-inner d-flex">
                <select
                  className="form-select custom-select w-25"
                  value={fromCurrency}
                  onChange={handleFromChange}
                >
                  <option value="NGN">🇳🇬 NGN</option>
                  <option value="CAD">🇨🇦 CAD</option>
                </select>

                <input
                  type="text"
               placeholder={
  rate !== null
    ? `1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}`
    : 'Enter Amount'
}

                  className="form-control bg-dark text-light ms-3"
                  value={amount ? `${currencySymbols[fromCurrency]} ${amount}` : ''}
                  onChange={handleAmountChange}
                />

                {/* <span>Balance: $24,890.00</span> */}
              </div>
            </div>
          </div>

          <div className="col-md-2 d-flex align-items-center justify-content-center">
            <img src={Dropdown} className="img-fluid swap_img" alt="" />
          </div>

          <div className="col-md-5 mb-4">
            <h5 className="grey-text">They will receive</h5>
            <div className="card text-light p-3">
              <div className="card-inner d-flex">
                <select
                  className="form-select custom-select w-35 p-2"
                  value={toCurrency}
                  onChange={handleToChange}
                >
                  <option value="NGN">🇳🇬 NGN</option>
                  <option value="CAD">🇨🇦 CAD</option>
                </select>
                <input
                  type="text"
                  placeholder={
                    rate !== null ? `${rate.toFixed(2)} ${toCurrency}` : 'Receiving Amount'
                  }
                  className="form-control bg-dark text-light ms-3"
                  value={converted ? `${currencySymbols[toCurrency]} ${converted}` : ''}
                  readOnly
                />
              </div>
            </div>
          </div>

          <p
            className="text-primary text-center"
            style={{
              background: '#080808',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60%',
              borderRadius: '40px',
              marginBottom: '4rem',
            }}
          >
            NGN = {rate !== null ? rate.toFixed(4) : '...'} CAD
          </p>

          <div className="rate_charge">
            <p>Conversion Fee</p>
            <p>$0.00</p>
          </div>
          <marquee className="text-center marquee_1">
            Our fees include a fee to exchange uncommon currencies or outside market hours.
            You can find out more in our fee page and confirm exact fees at the time of transaction.
          </marquee>
        </div>
      </div>

      {/* Mobile view */}
      <div className="mobile_rate">
        <h5 className="text-start">If you send</h5>
        <div className="card text-light p-3">
          <div className="card-inner d-flex">
            <select className="form-select custom-select w-35" value={fromCurrency} onChange={handleFromChange}>
              <option value="NGN">🇳🇬 NGN</option>
              <option value="CAD">🇨🇦 CAD</option>
            </select>

            <input
              type="text"
              className="form-control bg-dark text-light ms-3"
              value={amount ? `${currencySymbols[fromCurrency]} ${amount}` : ''}
              onChange={handleAmountChange}
            />
            <span>Balance: $24,890.00</span>
          </div>
        </div>

        <div className="mobile_swap mt-2">
          <img src={Dropdown} className="img-fluid swap_img" alt="" />
          <p
            className="text-primary text-center mid"
            style={{ background: '#080808', fontSize: '10px', width: '100%', borderRadius: '40px' }}
          >
            {fromCurrency} 1 = {rate !== null ? rate.toFixed(4) : '...'} {toCurrency}
          </p>
        </div>

        <h5 className="grey-text mt-2">They will receive</h5>
        <div className="card text-light p-3">
          <div className="card-inner d-flex">
            <select className="form-select custom-select w-35" value={toCurrency} onChange={handleToChange}>
              <option value="CAD">🇨🇦 CAD</option>
              <option value="NGN">🇳🇬 NGN</option>
            </select>
            <input
              type="text"
              className="form-control bg-dark text-light ms-3"
              value={converted ? `${currencySymbols[toCurrency]} ${converted}` : ''}
              readOnly
            />
          </div>
        </div>

        <div className="rate_charge">
          <p>Conversion Fee</p>
          <p>$0.00</p>
        </div>
        <p className="text-start marquee">
          Our fees include a fee to exchange uncommon currencies or outside market hours.
          You can find out more in our fee page and confirm exact fees at the time of transaction.
        </p>
      </div>
    </>
  );
};

export default CurrencyConverter;
