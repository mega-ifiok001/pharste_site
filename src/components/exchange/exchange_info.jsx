import React, { useEffect, useState } from 'react';

const Ex_info = () => {
  const [ngnToCadRate, setNgnToCadRate] = useState(null);
  const [cadToNgnRate, setCadToNgnRate] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const res = await fetch('https://api.pharste.com/api/rates');
        const json = await res.json();

        if (json.status && json.data) {
          // CAD to NGN
          const cadToNgn = json.data['CAD']?.['NGN'];
          // NGN to CAD
          const ngnToCad = json.data['NGN']?.['CAD'];

          // If only one direction exists, calculate the other
          setCadToNgnRate(cadToNgn || (ngnToCad ? 1 / ngnToCad : null));
          setNgnToCadRate(ngnToCad || (cadToNgn ? 1 / cadToNgn : null));
        }
      } catch (error) {
        setCadToNgnRate(null);
        setNgnToCadRate(null);
      }
    };

    fetchExchangeRate();
  }, []);

  return (
    <>
      <marquee
        className="text-center"
        style={{
          background: '#c8cce5',
          position: 'fixed',
          zIndex: '20000',
          color: 'blue',
          fontSize: '1.1rem',
          top: '0' , 
          borderRadius: '0',
          marginBottom: '1rem',
          fontFamily: 'poppins',
        }}
      >
        <b>
          Today's Rate:&nbsp;
          {ngnToCadRate !== null && cadToNgnRate !== null ? (
            <>
              NGN&nbsp;
              {Math.round(1 / ngnToCadRate).toLocaleString()} = 1 CAD,&nbsp;&nbsp;
              CAD 1 = NGN&nbsp;{Math.round(cadToNgnRate).toLocaleString()}
            </>
          ) : (
            '...'
          )}
        </b>
      </marquee>
    </>
  );
};

export default Ex_info;