import React, { useState, useEffect } from "react";
import Flag from "react-world-flags";
import "./exchange.css";

function Exchange() {
  const [exchangeRates, setExchangeRates] = useState({});
  const [amount, setAmount] = useState("");
  const [baseCurrency, setBaseCurrency] = useState("NGN");
  const [targetCurrency, setTargetCurrency] = useState("USD");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch exchange rates when the base currency changes
  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch exchange rates");
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

  // Handle changes to the amount input
  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    if (exchangeRates[targetCurrency] && value) {
      setConvertedAmount((value * exchangeRates[targetCurrency]).toFixed(2));
    } else {
      setConvertedAmount(null);
    }
  };

  // Handle changes to the base currency dropdown
  const handleBaseCurrencyChange = (e) => {
    const currency = e.target.value;
    setBaseCurrency(currency);
    setAmount("");
    setConvertedAmount(null);
  };

  // Handle changes to the target currency dropdown
  const handleTargetCurrencyChange = (e) => {
    const currency = e.target.value;
    setTargetCurrency(currency);
    if (exchangeRates[currency] && amount) {
      setConvertedAmount((amount * exchangeRates[currency]).toFixed(2));
    } else {
      setConvertedAmount(null);
    }
  };

  // Map currency codes to country flags
  const getCountryCode = (currency) => {
    const codes = {
      NGN: "NG",
      USD: "US",
      EUR: "EU",
    };
    return codes[currency] || currency.substring(0, 2);
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="exchange-container">
      <div className="inner">
        {/* Base Currency Section */}
        <div className="exchange">
          <div className="exchange-card">
            <div className="exchange-input">
              <select
                id="baseCurrency"
                value={baseCurrency}
                onChange={handleBaseCurrencyChange}
              >
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

        {/* Arrow Section */}
        <div className="arrows">
          <span>&#8594;</span>
          <span>&#8594;</span>
        </div>

        {/* Target Currency Section */}
        <div className="exchange">
          <div className="exchange-card">
            <div className="exchange-currency">
              <select
                id="targetCurrency"
                value={targetCurrency}
                onChange={handleTargetCurrencyChange}
              >
                {Object.keys(exchangeRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
              <Flag code={getCountryCode(targetCurrency)} className="flag-icon" />
            </div>
            <div className="exchange-output">
              <p>
                {convertedAmount !== null
                  ? `${targetCurrency} ${convertedAmount}`
                  : "Enter an amount"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ad Section */}
      <div className="ad">
        <span>hello, this is pharset stuffs</span>
      </div>
    </div>
  );
}

export default Exchange;