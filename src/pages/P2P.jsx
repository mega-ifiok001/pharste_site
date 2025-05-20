import React from 'react';
import Header from '../components/header/header';
import '../components/feature-hero/hero.css';
import './p2p.css';
import Footer from '../components/footer/footer';
import Ex_info from '../components/exchange/exchange_info';
const P2p_main = () => {
  return (
    <>
      <div className="feature-container">
        <Ex_info/>
        <Header />

        <div className="terms-container" style={{
  padding: '2rem',
  fontFamily: 'Poppins',
  lineHeight: '1.7',
  fontSize: '13.5px',
  marginTop: '7rem'
}}
>
          <h2>Pharste P2P Terms of Use</h2>
          <p className=' text-start' style={{
            fontSize:'14px'
          }}>
            These Terms of Use ("Terms") govern your access to and use of the Peer-to-Peer ("P2P") trading services
            provided by 12080133 Canada Inc. dba Pharste ("Pharste", "we", "our", or "us"). By accessing or using the
            P2P platform, you agree to comply with and be bound by these Terms. If you do not agree with these Terms,
            please refrain from using the service.
          </p>

          <h3>1. User Verification and Communication</h3>
          <p  className=' text-start' style={{
            fontSize:'14px'
          }}>
            Before initiating any trade, ensure that your registered email address and phone number are valid and
            reachable. Pharste may use these details to verify your identity or contact you regarding a transaction.
          </p>

          <h3>2. Trade Initiation</h3>
          <ul>
            <li>Select the naira as you wish to purchase from.</li>
            <li>Carefully review the ad details including exchange rate, limits (minimum/maximum), and available balance.</li>
            <li>Use a calculator to confirm the Naira amount you expect to receive.</li>
          </ul>

          <h3>3. Order Placement</h3>
          <ul>
            <li>Click on the ad and enter the Naira amount you intend to pay for in Canadian dollars (CAD).</li>
            <li>Note the amount of CAD to be sent, and the email address and name of the Naira seller.</li>
            <li>Send the CAD via Interac e-Transfer to the seller’s email.</li>
          </ul>

          <h3>4. Interac Transfer Instructions</h3>
          <ul>
            <li>
              If the Interac email is not registered for auto-deposit, set a security question and answer. Enter the answer in
              the designated field on the Pharste app.
            </li>
            <li>
              If the email is registered for auto-deposit, no question is needed. However, input a placeholder password in the
              same field for transaction tracking.
            </li>
          </ul>

          <h3>5. Payment Confirmation</h3>
          <ul>
            <li>After transferring the CAD, click “Confirm Payment” on the Pharste platform.</li>
            <li>
              Only the naira seller can view the submitted password or answer and will use this to accept your payment and
              release the Naira.
            </li>
          </ul>

          <h3>6. Trade Timeframe</h3>
          <ul>
            <li>Buyers must send payment and confirm within 15 minutes of initiating a trade.</li>
            <li>If confirmation is not received within this time, the transaction will be automatically cancelled.</li>
            <li>Users with repeated cancellations may face restrictions on the platform.</li>
          </ul>

          <h3>7. Transfer Guidelines</h3>
          <ul>
            <li>All transfers must originate from accounts that match the name and email registered with your Pharste account.</li>
            <li>Third-party transfers are strictly prohibited.</li>
            <li>
              If discrepancies arise (e.g., name mismatch), the seller is instructed not to release funds and must report the
              incident to <a href="mailto:support@pharste.com" className='text-primary'>support@pharste.com</a>.
            </li>
          </ul>

          <h3>8. Platform Fees</h3>
          <ul>
            <li>A fee of $3 CAD naira equivalent is charged to both buyer and seller for each transaction.</li>
            <li>Sellers are charged per ad posted, and buyers are charged upon each transaction completion.</li>
          </ul>

          <h3>9. Refund Policy</h3>
          <p  className=' text-start' style={{
            fontSize:'14px'
          }}>
            Pharste is committed to fairness and transparency in all transactions. Our refund policy outlines the conditions
            under which platform fees and deposits are refundable.
          </p>
          <ul>
            <li>
              For sellers, once an ad is published, the following is deducted from their Pharste Naira wallet:
              <ul>
                <li>The Naira equivalent of $3 CAD (platform fee),</li>
                <li>The Naira equivalent of the ad amount.</li>
              </ul>
            </li>
            <li>
              If a seller cancels an ad before any transaction has taken place, both the $3 CAD fee and ad amount are fully
              refunded.
            </li>
            <li>
              Once a trade is successfully initiated on an ad, the $3 CAD platform fee becomes non-refundable.
            </li>
            <li>
              If a trade is initiated for part of the ad amount, and the seller marks the ad as ‘completed’, the remaining
              balance is refunded to the seller’s Naira account.
            </li>
            <li>
              When a buyer initiates a trade:
              <ul>
                <li>The Naira equivalent of $3 CAD is deducted as a platform fee.</li>
                <li>If the buyer exits without completing the trade, all funds are refunded.</li>
                <li>If the buyer proceeds, the $3 CAD fee becomes non-refundable.</li>
              </ul>
            </li>
          </ul>
          <p  className=' text-start' style={{
            fontSize:'14px'
          }}>
            These measures ensure accountability and responsible use of the platform while covering operational costs related
            to maintaining a secure P2P environment.
          </p>

          <h3>10. Internal Dollar Transfers</h3>
          <p  className=' text-start'
          style={{
            fontSize:'14px'
          }}>CAD must be sent directly to the seller’s bank via Interac, using the email listed on the ad.</p>

          <h3>11. Dispute Resolution</h3>
          <p  className=' text-start' style={{
            fontSize:'14px'
          }}>
            In the event of an issue during a trade, users must promptly contact{' '}
            <a href="mailto:support@pharste.com" className='text-primary'>support@pharste.com</a>. Pharste is committed to protecting all users and
            ensuring a secure trading environment.
          </p>
        </div>
        {/* <Footer/> */}
      </div>


    </>
  );
};

export default P2p_main;
