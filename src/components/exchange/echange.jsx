import React, { useState, useEffect } from 'react';
import DownArrow from '../../asset/chevron-down.png';
import Dropdown from '../../asset/Dropdown.png';
import './exchange.css';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [converted, setConverted] = useState('');
  const [fromCurrency, setFromCurrency] = useState('NGN');
  const [toCurrency, setToCurrency] = useState('USD');
  const [rate, setRate] = useState(0.00067); // Default fallback rate

  const currencySymbols = {
    USD: '$',
    CAD: 'CA$',
    NGN: '₦',
    GHS: '₵',
    KES: 'KSh'
  };

  // Fetch exchange rate on currency change
  useEffect(() => {
    const fetchRate = async () => {
      try {
        const res = await fetch(`https://v6.exchangerate-api.com/v6/YOUR_API_KEY/pair/${fromCurrency}/${toCurrency}`);
        const data = await res.json();
        if (data && data.conversion_rate) {
          setRate(data.conversion_rate);
        }
      } catch (err) {
        console.error('Error fetching exchange rate:', err);
      }
    };

    fetchRate();
  }, [fromCurrency, toCurrency]);

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    const result = parseFloat(value) * rate;
    setConverted(isNaN(result) ? '' : result.toFixed(2));
  };

  const handleFromChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToChange = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <>
    <div className="container-md  text-light min-vh-auto desktop_rate ">
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
                <option value="USD">🇺🇸 USD</option>
                <option value="CAD">🇨🇦 CAD</option>
                <option value="GHS">🇬🇭 GHS</option>
                <option value="KES">🇰🇪 KES</option>
              </select>
            
              <input
  type="text"
  className="form-control bg-dark text-light ms-3"
  value={amount ? `${currencySymbols[fromCurrency]} ${amount}` : ''}
  onChange={(e) => {
    const raw = e.target.value.replace(/[^\d.]/g, '');
    setAmount(raw);

    const result = parseFloat(raw) * rate;
    setConverted(isNaN(result) ? '' : result.toFixed(2));
  }}
/>

              <span>Balance: $24,890.00</span>
            </div>
          </div>
        </div>

        <div className="col-md-2 d-flex align-items-center justify-content-center">
          <img src={Dropdown} className="img-fluid swap_img" alt="" />
        </div>

        <div className="col-md-5 mb-4">
          <h5 className="grey-text">They will receive</h5>
          <div className="card  text-light p-3">
            <div className="card-inner d-flex">
              <select
                className="orm-select custom-select w-35 p-2"
                value={toCurrency}
                onChange={handleToChange}
              >
                <option value="USD">🇺🇸 USD</option>
                <option value="CAD">🇨🇦 CAD</option>
                <option value="NGN">🇳🇬 NGN</option>
                <option value="GHS">🇬🇭 GHS</option>
                <option value="KES">🇰🇪 KES</option>
              </select>
              <input
  type="text"
  className="form-control bg-dark text-light ms-3"
  value={converted ? `${currencySymbols[toCurrency]} ${converted}` : ''}
  readOnly
/>

            </div>
          </div>
        </div>
      
        <p className="text-primary text-center " style={{background:'#080808', display:'flex', alignItems:'center', justifyContent:'center', width:'60%', borderRadius:'40px', marginBottom:'4rem' }}>
          {fromCurrency} 1 = {rate} {toCurrency} Nigerian Naira to US Dollar
        </p>

        <div className="rate_charge">
          <p>Conversion Fee</p>
        <p>$0.00</p>
        </div>
        <marquee
  className="text-center"

>
  Our fees include a fee to exchange uncommon currencies or outside market hours.
  You can find out more in our fee page and confirm exact fees at the time of transaction.
</marquee>


      </div>

     

      
     
   
    </div>


    <div className="mobile_rate">
    <h5 className="text-start">If you send</h5>
          <div className="card text-light p-3">
            <div className="card-inner d-flex">
              <select
                className="form-select custom-select w-35"
                value={fromCurrency}
                onChange={handleFromChange}
                
              >
              
                <option value="NGN">🇳🇬 NGN</option>
                <option value="USD">🇺🇸 USD</option>
                <option value="CAD">🇨🇦 CAD</option>
                <option value="GHS">🇬🇭 GHS</option>
                <option value="KES">🇰🇪 KES</option>
              </select>
            
              <input
  type="text"
  className="form-control bg-dark text-light ms-3"
  value={amount ? `${currencySymbols[fromCurrency]} ${amount}` : ''}
  onChange={(e) => {
    const raw = e.target.value.replace(/[^\d.]/g, '');
    setAmount(raw);

    const result = parseFloat(raw) * rate;
    setConverted(isNaN(result) ? '' : result.toFixed(2));
  }}
/>

              <span>Balance: $24,890.00</span>
            </div>
          </div>

      <div className="mobile_swap mt-2">
      <img src={Dropdown} className="img-fluid swap_img" alt="" />
      <p className="text-primary text-center mid" style={{background:'#080808',margin:'0', fontSize:'10px', display:'flex', alignItems:'center', justifyContent:'center', width:'100%', borderRadius:'40px'}}>
          {fromCurrency} 1 = {rate} {toCurrency} Nigerian Naira to US Dollar
        </p>

      </div>


      <h5 className="grey-text mt-2">They will receive</h5>
          <div className="card  text-light p-3">
            <div className="card-inner d-flex">
              <select
                className="form-select custom-select w-35 "

                
                value={toCurrency}
                onChange={handleToChange}
              >
                <option value="USD">🇺🇸 USD</option>
                <option value="CAD">🇨🇦 CAD</option>
                <option value="NGN">🇳🇬 NGN</option>
                <option value="GHS">🇬🇭 GHS</option>
                <option value="KES">🇰🇪 KES</option>
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
        <p
  className="text-start marquee"

>
  Our fees include a fee to exchange uncommon currencies or outside market hours.
  You can find out more in our fee page and confirm exact fees at the time of transaction.
</p>

    </div>

    </>
  );
};

export default CurrencyConverter;
