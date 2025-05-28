import React, { useState, useEffect, useRef } from 'react';
import './help.css';
import Footer from '../footer/footer';
import dash from '../../asset/minus-circle.png';
import Header from '../header/header';

import emailjs from "@emailjs/browser";

import plus from '../../asset/plus.png';
import Ex_info from '../exchange/exchange_info.jsx';


import '../feature-hero/hero.css';
import '../../pages/p2p.css';


const TermsAndConditions = () => (
    <div className="Terms " style={{ marginTop: '6rem' }}>
        <h1 className='mt-5 text start'>Terms and Condition</h1>
        <h2>Introduction</h2>
        <p>
            In this client agreement, we, us and our refers to 12080133 Canada Incorporated dba <strong>Pharste</strong> along with her employees, directors, successors, and assigns. The terms ‘you’ and ‘your’ refer to persons who have signed up to utilize the services prescribed in this agreement. Pharste is a registered Money Service Business and is regulated by the Financial Transaction and Report Analysis Centre of Canada (FINTRAC) with registration number <strong>M22889301</strong> to deal in money transfer and foreign exchange transactions.<br />
            <br />
            <br />
            <br />
            <strong>
                General Provisions<br />
                <br />
            </strong>
            <strong>A. </strong>By utilizing the service of Pharste, you accept and agree to the terms and conditions contained in this agreement. This is to ensure that we can provide you with the services that you need.<br />
            <br />
            <strong>B.</strong> Pharste exercise the right to alter the agreement to keep up with industry regulations and business demands. Except mandated by law, you will be informed of any changes made before they go into effect. All adjustment to this agreement will come into force upon publication. Continued usage of Pharste services after an update to this agreement constitutes automatic acceptance of the updated agreement.<br />
            <br />
            <strong>C. </strong>Changes made to this agreement comes into force after publication and will not affect previous usage of Pharste services.<br />
            <br />
            <strong>D. </strong>You agree to access Pharste services strictly for personal, non-commercial purposes. Pharste does not welcome third party deposits. You must only fund your wallet from a bank account or payment instrument set up in your name and this name must be the same as the verified name on your profile. Your access to Pharste services is non-transferable, non-exclusive and cannot be rented, leased, sold, lent, or sublicensed. Any acts that violate our intellectual property is strictly prohibited. Downloading, retrieving, and displaying Pharste website on a computer screen, printing pages, photocopy and storage of such pages as soft copy are allowed however the intellectual property in the service continues to be vested with Pharste.<br />
            <br />
            <strong>E.</strong> All website elements, social media pages are owned by us and our suppliers and protected by Canadian and trademark laws, international treaties and terms and conditions.<br />
            <br />
            <strong>F. </strong>Reproduction, modification, copying, distribution, transmission, display, publishing, or redistribution of the service is prohibited. Unauthorized use of Pharste materials can result in civil and criminal charges.<br />
            <br />
            <strong>G. </strong>Canada’s anti-money laundering policies mandate us to obtain, verify and record information about you. Therefore, you agree to furnish us with all relevant information and documents that we may ask for and in the service registration form before and after registration. <br />
            <strong>
                <br />
                H.
            </strong>
            All information provided to Pharste must be accurate and current and no information withheld. All information must be updated promptly to ensure accuracy and completeness. Pharste can lawfully carry out necessary investigations, including using a third party to authenticate your identity as part of the registration process. <br />
            <strong>
                <br />
                I.
            </strong>
            By reason of this agreement, you consent to Pharste making inquiries with third parties to authenticate any information that you supply.<br />
            <strong>
                <br />
                J.
            </strong>
            Pharste reserves the right to suspend or terminate service in cases where it is proven or suspected that information provided is false, outdated, incomplete or misleading.<br />
            <br />
            <strong>K.</strong> To be eligible to access Pharste services, you must be 18 years of age, reside in one of the countries we provide money remittance services for, access Pharste services for your own personal use, not acting as a third party for remittance purposes, not listed on any sanctions list in any country, not a politically exposed person in any country, not ranked below Pharste’s anti-money laundering standards which is at our sole discretion.<br />
            <br />
            <strong>L. </strong>Pharste services are made available on an “as is” and “as available” basis, except as warranted in these terms of use, we expressly disclaim all warranties of any kind, whether express or implied or statutory, including, but not limited to the implied warranties of merchantability, fitness for a particular purpose, data accuracy and completeness and any warranties relating to non-infringement in the service. We shall not be responsible or liable for the authenticity, accuracy, completeness, errors, omission, typographic errors, disruption, delay, interruption, failure, deletion, defect of any information, research, reports, analysis, quotes etc. in this website or any part thereof. Also, we shall not cover any liability direct or indirect to you or any third party because of non-functioning of any equipment belonging to you, any third party or us. We shall not be responsible for any downtime of such equipment.<br />
            <br />
            <strong>M. </strong>You will defend, indemnify, and hold harmless Pharste, its parent company, affiliates, licensors, suppliers, issuer, third-party providers, respective shareholders, directors, officers, assigns and successors-in-interest from any and all liabilities, damages caused by any virus, personal injuries, loss of profits, data or other intangible, any damages arising from interruption, suspension or termination of service, including but not limited to direct, indirect, incidental, special, consequential or exemplary damages, whether such interruption, suspension or termination was justified or not, negligent or intentional, inadvertent or advertent, causes of action and cost arising out of or resulting from your use of Pharste services, your alleged or actual acts whether negligent or wilful, your omissions or those of your agents or employees, your failure to comply with this agreement and third party use of your account or services.<br />
            <strong>
                <br />
                N.
            </strong>
            In no event will our liability for any claim, whether in contract, tort or any other theory of liability exceed one CAD. You also agree that your sole remedy under this Terms of Use is cancellation of the service.<br />
            <strong>
                <br />
                O.
            </strong>
            You represent and warrant that all information that you provide regarding the Remittance payments is true, accurate and complete. When sending and/or receiving money, Pharste may rely on the registration information and remittance payment request information that you provide. You acknowledge that any mistakes in the information, including misidentification of Beneficiary(s), incorrect or inconsistent account names and numbers, or misspellings, are fully your responsibility and that Pharste shall have no liability for executing a payment based upon the inaccurate or incomplete information you provided.<br />
            <br />
            <strong>P. </strong>On receipt of your Instruction, you cannot cancel it. Notwithstanding this clause, we may, in our absolute discretion, attempt to reverse your Instruction if you have informed us that you wish us to do so. In some cases, we may have initiated an irreversible request for funds to be paid out to your receiver by a Service Provider or third-party payment provider. If this is the case, we cannot guarantee that the reversal will be successful. PLEASE NOTE: We apply a charge of 3 CAD (or equivalent in other currencies) to reverse your Instruction.<br />
            <br />
            <strong>Q. </strong>Pharste may also have charges that would apply to money transfers. These fees will be clearly stated and explained and can change at the sole discretion of Pharste. <br />
            <br />
            <strong>R. </strong>Pharste may offer you the opportunity to earn rewards for activities such as referring other people to Pharste or transferring a higher amount. Pharste reserves the right at any time to modify, suspend or cancel the rewards without notice to you.<br />
            <br />
            <strong>S. </strong>We introduce programs such as these in good faith and expect the same good faith in return. Please note that we may withhold rewards where we believe customers are acting in bad faith or otherwise acting contrary to the intent of this program. To be clear, commercializing, advertising, publishing, mass distributing, selling, or paying for use of referral links is not appropriate and will therefore not be honoured. We cannot cover every disreputable scenario, nor will we attempt to, but we do promise to be fair and reasonable.<br />
            <br />
            <strong>T. </strong>If you suggest a feature or adjustment to Pharste Platform, or if you submit to us any marketing material (a &quot;Suggestion&quot;) then you agree that we may make use of the Suggestion and disclaim any intellectual property rights, including any moral rights, to any resulting intellectual property.<br />
            <br />
            <strong>U.</strong> Pharste is committed to the privacy of customers but as a regulated business we may be required to share your personal information with FINTRAC and other regulatory agencies or law enforcement. We may also disclose your personal information to credit bureaus, anti-money laundering service providers, or other identity verification partners as part of opening your Account or for periodic checks to ensure that we have accurate information about you. We may also disclose your personal information to financial institutions or other financial intermediaries. Our commitment to privacy is further explained in the Pharste Privacy Policy which forms part of this agreement.<br />
            <br />
            <strong>V. </strong>Either party may terminate this agreement for any reason or for no reason without notice and without further liability.<br />
            <br />
            <strong>X. </strong>We may take any action we consider applicable to implement this Agreement, including employing any third-party agent to collect any amount owing, taking steps to enforce its rights against your assets, such as attaching any amount owing to those assets, and commencing legal proceedings.<br />
            <br />
            <strong>Y. </strong>This Agreement will be governed by and construed in accordance with the laws of the Province of Ontario, and the parties submit to the jurisdiction of the Courts and Tribunals of Ontario, Canada.This is the entire agreement between Pharste and you. This agreement supersedes any other understandings or contracts, and you represent that in entering into this agreement you have not relied on any representations made by Pharste.<br />
            <br />
            <strong>Z.</strong> For Questions, notices, and requests for further information, reach us at:<br />
            Chat us on WhatsApp +16479174197<br />
            Call at +16479174197<br />
            Email at support@pharste.com
        </p>
    </div>
);

const PrivacyPolicy = () => (
    <div className="Terms " style={{ marginTop: '6rem' }}>
        <h1 className='mt-5 text start'>Privacy Policy</h1>
        <h2>Introduction</h2>
        <p className="mt-2 text-start">
            As a regulated money service business, we handle personal information of our customers with extreme care even going beyond our legal obligations. As a Pharste user, we take extra steps to ensure that customer data is kept very secured and not put to any unexpected use. We take very seriously our resolve to protect customer data and privacy and utilize customer information with transparency.
        </p>

        <br />


        <p className="mt-2 text-start">
            By visiting this website, our partners’ websites, or giving us your personal information when you peruse our website, set up an account, request currency exchange, partake in a competition, promotion or survey or when you contact one of our employees, for example by telephone, chat or email, you expressly consent to our use and disclosure of your personal information and direct us to do so in the manner described in this Privacy Policy.
        </p>
        <p className='text-start'>Please read this notice carefully, together with our Terms and Conditions and any other documents referred to in it. Here we set out the basis on which any information we collect about you or from you, or that you provide us with, will be processed by us and other parties in providing you with the services that you need through the website, apps or over the phone. Pharste is committed to making use of your information in accordance to this privacy policy. In circumstances where there is conflict, the terms of use shall stand supreme.
        </p>
        <p className='text-start'>We also advice running some tests using Postman. Postman is a collaboration platform for API development which makes testing endpoints easy. We have also provided a Postman Collection you can easily import to your postman and start testing.</p>
        <p><b>a).</b> Children are not eligible to use Pharste services and are therefore not allowed to submit any information to us.
            <b>b).</b> Pharste is a Canadian money remittance company authorized to deal in foreign exchange and money transferring activities. In this Policy, "You" and “your" are references to a user of our website and/or of our Mobile Apps.
        </p>

        <p><b>c)</b>. We, or our third-party service providers on our behalf collects the following personal information about our customers as follows:
            — Contact information (e.g., name, address, phone number, email); and,
            — Information that we are required by law to collect (AML/CTF) (e.g., occupation as required by law); and,
            — Identity documents as required by law (e.g., Government issued identity card); and,
            — Photo(s) to compare against provided identity documents (e.g., selfie); and,
            — Network identifiers (e.g., IP address or browser information, login information, time zone setting, operating system and platform); and,
            — Personal information that is requested from you for the use our website or app.
            — Details of the transactions you carry out when using our Services, including geographic location from which the transaction originates.
        </p>

        <p><b>d).</b> We may collect and store any information you provide to us when you use Pharste Services, including when you add information on our website, or social platforms, add or update your account information, or dispute resolutions, or when you otherwise correspond with us regarding our services, or other social media functions on our website, enter a competition, promotion or survey, and when you make us aware of a problem with our services. The information you give us may include your name, address, e-mail address, phone number, financial information (including bank account information), payment reason, geographical location, personal description and photograph.
            We may also need additional commercial and/or identification information from you e.g., if you send or receive certain high-value or high-volume transactions or as needed to comply with our anti-money laundering obligations under applicable law.
        </p>


        <p><b>e).s</b>We may also obtain information about you from third parties such as identity verification services and credit bureaus. This process is known as a “soft pull”. A soft pull is restricted only to Name, Address, and Date of Birth, to match the information found on the credit bureaus’ database. The nature of the pull is that only you, as the owner of your credit bureau report can see this inquiry. It does not affect your credit score.
        </p>


        <p><b>f).</b> If you log in to our services using your social media account (for example, Facebook, Instagram) we will receive relevant information that is necessary to enable our Services and to authenticate you. The social media network will provide us with access to certain information that you have provided to them, including your name, profile image and e-mail address. We use such information, together with any other information you directly provide to us when registering or using our Services, to create your account and to communicate with you about the information, products, and services that you request from us. You may also be able to specifically request that we have access to the contacts in your social media account, so that you can send a referral link to your family and friends. We will use, disclose, and store all this information in accordance with this privacy policy.
        </p>

        <p><b>g).</b> To help protect you from fraud and misuse of your personal information, we may collect information about you and your interactions with Pharste Services.
        </p>


        <p>
            <b>h).</b> Our primary purpose in obtaining personal information is to provide you with a protected, smooth, proficient, and personalised money exchange experience. We may use the following information to:
            — Provide Pharste money transfer Services and customer support.
            — Process transactions and send you notices (email, text, chats) about your transactions.
            — Verify your identity, including during account creation and password reset processes.
            — Manage risk, or to detect, prevent, and/or remediate fraud or other potentially prohibited or illegal activities.
            — Detect, prevent, or remediate violations of policies or applicable user agreements.
            — Improve Pharste Services by customizing your user experience.
            — Gauge the functioning of Pharste Services and improve their content and layout.
            — Direct and protect our information technology infrastructure.
            — Provide targeted marketing and advertising, provide service update notices, and deliver promotional offers based on your communication preferences.
            — Contact you at any telephone number, by placing a voice call or through text (SMS) or WhatsApp or email messaging, as authorized by our User Agreement.
            — Perform creditworthiness and solvency checks, compare information for accuracy and verify it with third parties.

        </p>


        <p><b>i).</b> We do not sell or rent your personal information to third parties for their marketing purposes without your explicit consent. We may combine your personal information with information we collect from other companies and use it to improve and personalize Pharste Services, content, and advertising.
        </p>


        <p><b>j).</b> Most personal information that Pharste collects is processed by our own personnel, but for some purposes, we rely on third parties. We collect and process personal information using Pharste personnel who have received training in the importance of security, confidentiality, and privacy. We make use of contractors, who are legally bound to confidentiality and are also trained on security, confidentiality, and privacy.</p>

        <p><b>k).</b> We design our systems with your security and privacy in mind. We work to protect the security of your personal information during transmission by using encryption protocols and software. We maintain physical, electronic, and procedural safeguards in connection with the collection, storage, and disclosure of your personal information. Our security procedures mean that we may ask you to verify your identity before we disclose personal information to you. It is important for you to protect against unauthorized access to your account or password. We recommend using a unique password for your Pharste account that is not utilized for other online accounts. Be sure to sign off when you finish using a shared computer.</p>
        <p><b>l).</b> We want to have accurate information about our customers and users, and we want you to be able to access the information we have collected about you. You can write to us to gain access to your personal information. We require customers and users to clearly demonstrate who they are before divulging personal information because we are mindful of attempts to impersonate people to gain access to their personal information inappropriately.
        </p>

        <p><b>m).</b> If you would like to correct an error regarding your personal information, please use the provided functionality within the Pharste website or write to us with an explanation of the correction. As a regulated financial institution, we keep your personal information to enable your continued use of Pharste Services and storage of your data extends beyond the closure of your account with us, as it is required by Law. Your data is only accessed internally on a need-to-know basis, which is done only if necessary. Pharste will always delete data that is no longer required by a relevant law or jurisdiction in which we operate.</p>  <br />



    </div>
);

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="" style={{ marginTop: '7rem' }}>
            <h1 className="mx-3 fs-2 mb-3 mt-3"> Frequently Asked Questions</h1>
            <div className="mx-3">
                <div className={`faq-item ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleFAQ(0)}>
                    <div className="d-flex align-items-center justify-content-space-around">
                        <img src={activeIndex === 0 ? dash : plus} className="toggle-icon" alt="" />
                        <h2>How does Pharste fulfil customer transactions?
                        </h2>
                    </div>
                    {activeIndex === 0 && <p className="faq-content">At Pharste, we believe in personalised service. For this reason, we keep an open line of communication on our whatsapp lines to support our customers till their transactions are completed.</p>}
                </div>
                <div className={`faq-item ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleFAQ(1)}>
                    <div className="d-flex align-items-center justify-content-space-around">
                        <img src={activeIndex === 1 ? dash : plus} className="toggle-icon" alt="" />
                        <h2>When a customer places an exchange order on the website, how does Pharste fulfil the order?</h2>
                    </div>
                    {activeIndex === 1 && <p className="faq-content">After we have received a customer’s exchange request, we encourage customers to reach us on whatsapp to receive updates on their order. We will also contact customers by email or whatsapp if we need more information or to give them an update on their transaction..</p>}
                </div>
                <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleFAQ(2)}>
                    <div className="d-flex align-items-center justify-content-space-around">
                        <img src={activeIndex === 2 ? dash : plus} className="toggle-icon" alt="" />
                        <h2>How long does it take to fulfil transaction?</h2>
                    </div>
                    {activeIndex === 2 && <p className="faq-content">In the absence of any delays from our partners (banks, payment systems). Pharste will fulfil all transactions within two hours of receipt of the funds.</p>}
                </div>

                <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleFAQ(2)}>
                    <div className="d-flex align-items-center justify-content-space-around">
                        <img src={activeIndex === 2 ? dash : plus} className="toggle-icon" alt="" />
                        <h2>I sent naira to the Pharste Nigeria account but the whatsapp agent says it has not been received. What should I do?</h2>
                    </div>
                    {activeIndex === 2 && <p className="faq-content">In instances where naira is not received, we urge customers to contact their bank to ascertain the cause of the issue. We will do our best to support our customers should this occur..</p>}
                </div>

                <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleFAQ(2)}>
                    <div className="d-flex align-items-center justify-content-space-around">
                        <img src={activeIndex === 2 ? dash : plus} className="toggle-icon" alt="" />
                        <h2>How can customers complete the verification</h2>
                    </div>
                    {activeIndex === 2 && <p className="faq-content">Customers can find the verification link on the Kyc page and in the menu. Customers just need to click on the link, upload a government-issued photo identification card and take a selfie.</p>}
                </div>

                <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleFAQ(2)}>
                    <div className="d-flex align-items-center justify-content-space-around">
                        <img src={activeIndex === 2 ? dash : plus} className="toggle-icon" alt="" />
                        <h2>How is customer information stored and used?</h2>
                    </div>
                    {activeIndex === 2 && <p className="faq-content">Customer data is protected using our topnotch safeguard measures. Customer information is treated with utmost confidentiality and is not sold or given out for any reason.</p>}
                </div>


                <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleFAQ(2)}>
                    <div className="d-flex align-items-center justify-content-space-around">
                        <img src={activeIndex === 2 ? dash : plus} className="toggle-icon" alt="" />
                        <h2>Does Pharste handle money transfers to other countries aside Canada and Nigeria?</h2>
                    </div>
                    {activeIndex === 2 && <p className="faq-content">Currently, Pharste only handles money remittance to Nigeria and Canada. Money service for other countries will be rolled out in the near future.</p>}
                </div>
            </div>

        </div>
    );
};




const P2p_main = () => (
  <div className="feature-container">
    <Ex_info />
    <Header />

    <div
      className="terms-container"
      style={{
        padding: "2rem",
        fontFamily: "Poppins",
        lineHeight: "1.7",
        fontSize: "13.5px",
        marginTop: "7rem",
      }}
    >
      <h2>Pharste P2P Terms of Use</h2>
      <p className="text-start" style={{ fontSize: "14px" }}>
        These Terms of Use ("Terms") govern your access to and use of the Peer-to-Peer ("P2P") trading services provided by 12080133 Canada Inc. dba Pharste ("Pharste", "we", "our", or "us"). By accessing or using the P2P platform, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please refrain from using the service.
      </p>
      <ol style={{ paddingLeft: "1.1em" }}>
        <li>
          <b>User Verification and Communication</b>
          <p>
            Before initiating any trade, ensure that your <b>registered email address and phone number</b> are valid and reachable. Pharste may use these details to verify your identity or contact you regarding a transaction.
          </p>
        </li>
        <li>
          <b>Trade Initiation</b>
          <p className='text-start'>To begin a trade:</p>
          <ul>
            <li>Select the naira ad you wish to purchase from.</li>
            <li>Carefully review the ad details including exchange rate, limits (minimum/maximum), and available balance.</li>
            <li>Use a calculator to confirm the Naira amount you expect to receive.</li>
          </ul>
        </li>
        <li>
          <b>Order Placement</b>
          <ul>
            <li>Click on the ad and enter the Naira amount you intend to pay for in Canadian dollars (CAD).</li>
            <li>Note the amount of CAD to be sent, and the email address and name of the Naira seller.</li>
            <li>Send the CAD via Interac e-Transfer to the seller’s email.</li>
          </ul>
        </li>
        <li>
          <b>Interac Transfer Instructions</b>
          <ul>
            <li>If the Interac email is not registered for auto-deposit, set a security question and answer. Enter the answer in the designated field on the Pharste app.</li>
            <li>If the email is registered for auto-deposit, no question is needed. However, input a placeholder password in the same field for transaction tracking.</li>
          </ul>
        </li>
        <li>
          <b>Payment Confirmation</b>
          <ul>
            <li>After transferring the CAD, click “Confirm Payment” on the Pharste platform.</li>
            <li>Only the naira seller can view the submitted password or answer and will use this to accept your payment and release the Naira.</li>
          </ul>
        </li>
        <li>
          <b>Trade Timeframe</b>
          <ul>
            <li>Buyers must send payment and confirm within 30 minutes of initiating a trade.</li>
            <li>If confirmation is not received within this time, the transaction will be automatically cancelled.</li>
            <li>Users with repeated cancellations may face restrictions on the platform.</li>
          </ul>
        </li>
        <li>
          <b>Transfer Guidelines</b>
          <ul>
            <li>All transfers must originate from accounts that match the name and email registered with your Pharste account.</li>
            <li>Third-party transfers are strictly prohibited.</li>
            <li>If discrepancies arise (e.g., name mismatch), the seller is instructed not to release funds and must report the incident to <a href="mailto:support@pharste.com" className="text-primary">support@pharste.com</a>.</li>
          </ul>
        </li>
        <li>
          <b>Platform Fees</b>
          <ul>
            <li>A fee of $3 CAD naira equivalent is charged to both buyer and seller for each transaction.</li>
            <li>Sellers are charged per ad posted, and buyers are charged upon each transaction completion.</li>
          </ul>
        </li>
        <li>
          <b>Refund Policy</b>
          <p>
            Pharste is committed to fairness and transparency in all transactions. Our refund policy outlines the conditions under which platform fees and deposits are refundable.
          </p>
          <ul>
            <li>
              <b>For sellers:</b> Once an ad is published, the following is deducted from their Pharste Naira wallet:
              <ul>
                <li>The Naira equivalent of $3 CAD (platform fee),</li>
                <li>The Naira equivalent of the ad amount.</li>
              </ul>
              If a seller cancels an ad before any transaction has taken place, the Naira equivalent of $3 CAD (platform fee) and the ad amount are fully refunded.
              Once a trade is successfully initiated on an ad, the $3 CAD platform fee becomes non-refundable.
              If a trade is initiated for a part of the ad amount and after this, the seller changes the status of the ad to ‘completed’, the remaining amount in the ad is refunded to the seller's naira account.
            </li>
            <li>
              <b>For buyers:</b> When a buyer initiates a trade on an ad, the following amounts are deducted from the buyer’s Pharste Naira wallet:
              <ul>
                <li>The Naira equivalent of $3 CAD (platform fee),</li>
                <li>The Naira equivalent of $10 CAD (good-use deposit),</li>
                <li>resulting in a total deduction equivalent to $13 CAD.</li>
              </ul>
              If the buyer exits the ad without initiating a trade, the full amount is refunded.
              If the buyer proceeds with the trade, the $3 CAD platform fee becomes non-refundable, and the $10 CAD good-use deposit is refunded upon trade completion.
            </li>
          </ul>
          <br />
          <p className='text-start'>
            These measures ensure accountability and responsible use of the platform while covering operational costs related to maintaining a secure P2P environment.
          </p>
        </li>
        <li>
          <b>Internal Dollar Transfers</b>
          <ul>
            <li>CAD must be sent directly to the seller’s bank via Interac, using the email listed on the ad.</li>
            <li>If CAD is mistakenly sent within the Pharste app (wallet-to-wallet), the $10 good-use fee becomes non-refundable, covering internal transaction costs.</li>
          </ul>
        </li>
        <li>
          <b>Dispute Resolution</b>
          <p className='text-start'>
            In the event of an issue during a trade, users must promptly contact <a href="mailto:support@pharste.com" className="text-primary">support@pharste.com</a>. Pharste is committed to protecting all users and ensuring a secure trading environment.
          </p>
        </li>
      </ol>

      <hr style={{ margin: "2.5em 0" }} />

      <h2>About Us</h2>
      <p>
        At Pharste, we believe sending and managing money across borders should be simple, affordable, and empowering. Born out of the real challenges faced by immigrants and their families, Pharste is building the financial bridge between people and countries.
        <br />
        Our platform offers seamless international remittance, a community-powered peer-to-peer exchange, auto-saving with guaranteed interest, and Canadian bill payment solutions—all in one secure, easy-to-use app.
        <br />
        <b>What makes us different?</b> We give our users the power to set their own exchange rates, connect directly with others, and grow their savings—all while enjoying transparency, security, and control.
      </p>

      <h3>Our Mission</h3>
      <p>
        To empower the African diaspora with seamless, secure, and community-driven financial tools that make cross-border money movement simpler, smarter, and more affordable.
      </p>

      <h3>Vision Statement</h3>
      <p>
        To lead the future of inclusive finance by providing borderless, affordable, and people-first solutions that connect underserved communities to the global economy.
      </p>

      <h3>Why Choose Pharste?</h3>
      <ul>
        <li><b>Built for the Diaspora:</b> We understand the real challenges of sending money home—because we’ve lived them. Pharste is designed with your needs in mind.</li>
        <li><b>Peer-to-Peer Power:</b> Set your own exchange rates and trade directly with others. No hidden fees. No middlemen. Just control, community, and savings.</li>
        <li><b>Guaranteed Interest Savings:</b> Our auto-save feature helps you grow your money effortlessly—with guaranteed returns.</li>
        <li><b>Fast, Reliable Remittance:</b> Send money from Canada to Nigeria in seconds. Track every step. No stress. No guesswork.</li>
        <li><b>All-in-One Financial Hub:</b> From bill payments in Canada to savings and transfers—you get everything in one simple app.</li>
      </ul>
      <p className='text-start'>
        Pharste is more than a money app—it’s a financial lifeline for the global African community.
      </p>

      <h3>Our Core Values</h3>
      <ol>
        <li><b>Trust:</b> We build and earn trust by being transparent, secure, and consistent—your money is safe with us.</li>
        <li><b>Community:</b> We believe in the power of people helping people. Our peer-to-peer platform is rooted in collaboration and connection.</li>
        <li><b>Empowerment:</b> We give our users more control over how their money moves—because financial freedom starts with choice.</li>
        <li><b>Innovation:</b> We use technology to solve real-world problems, creating smarter and simpler ways to send, save, and exchange money.</li>
        <li><b>Inclusion:</b> Everyone deserves access to fair and flexible financial tools. We’re here for immigrants, students, entrepreneurs, and families alike.</li>
        <li><b>Integrity:</b> We hold ourselves to the highest standards of compliance, accountability, and ethics—always.</li>
      </ol>

      <h3>Creating Impact Together</h3>
      <p className='text-start'>
        At Pharste, we’re not just moving money—we’re moving lives forward. Every transaction helps build a stronger, more connected diaspora community. By giving people control over how they send, save, and exchange funds, we’re creating real financial inclusion—together.
      </p>
    </div>
  </div>
);




const ContactUs = () => {
    const addresses = [
        { name: "North York", address: "3091 Dufferin street, ON M6A 0C4", lat: -37.8136, lng: 144.9631 },
        { name: "Sydney", address: "100 george street, Sydney NSW 2000 ALI", lat: -33.8688, lng: 151.2093 },
        { name: "Byron Bay", address: "100 johnson street, Byron Bay NSW 2481 AU", lat: -28.6434, lng: 153.6120 },
    ];

    const [map, setMap] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const form = useRef();

    const handleClick = (index) => {
        const address = addresses[index];
        setActiveIndex(index);

        if (map) {
            map.setCenter({ lat: address.lat, lng: address.lng });
        }

        document.querySelector(".blue-line").style.left = `${index * 33.33}%`;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_8ouv69f",
                "template_46z1agy",
                form.current,
                "qmHvOk5OU1pq_8a3A"
            )
            .then(
                (result) => {
                    console.log("Message sent successfully:", result.text);
                    alert("Thank you! Your message has been sent.");
                },
                (error) => {
                    console.error("Error sending the message:", error.text);
                    alert("Oops! Something went wrong. Please try again.");
                }
            );
    };

    return (
        <div style={{ marginTop: "6rem" }}>
            <div className="contact">
                <h1>Get in Touch</h1>
                <h2 className="mt-2">Our Locations</h2>
                <p className="mt-1">Say hello to our friendly teams at one of these locations</p>
            </div>

            <div id="map" className="map" style={{ height: "400px", width: "100%" }}></div>

            <div className="grey-line">
                <div className="blue-line" style={{ left: `${activeIndex * 33.33}%`, height: "10px" }}></div>
            </div>
            <div className="address-container">
                {addresses.map((address, index) => (
                    <div
                        key={index}
                        className={`address-column ${activeIndex === index ? "active" : ""}`}
                        onClick={() => handleClick(index)}
                    >
                        <h3>{address.name}</h3>
                        <p>{address.address.split(", ")[0]}</p>
                        <p>{address.address.split(", ").slice(1).join(", ")}</p>
                    </div>
                ))}
            </div>

            <div className="form px-2">
                <h1>We're here to help</h1>
                <p className="mt-2">
                    Have questions or feedback? We'd love to hear from you. Our team is committed to providing timely and helpful responses to every inquiry.
                </p>

                <div className="row mt-3">
                    <div className="col-lg-7 col-md-10 col-sm-12 col-xs-12">
                        <form className="contact_us" ref={form} onSubmit={sendEmail}>
                            <div className="d-flex align-items-center w-100% justify-content-space-around">
                                <div className="first">
                                    <label htmlFor="f_name">First Name</label>
                                    <br />
                                    <input
                                        type="text"
                                        placeholder="First name"
                                        name="first_name"
                                        required
                                    />
                                </div>

                                <div className="first firsts">
                                    <label htmlFor="l_name">Last Name</label>
                                    <br />
                                    <input
                                        type="text"
                                        name="last_name"
                                        placeholder="Last name"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="first">
                                <label htmlFor="email">Email</label>
                                <br />
                                <input type="email" name="email" placeholder="Email" required />
                            </div>

                            <div className="first">
                                <label htmlFor="phone">Phone Number</label>
                                <br />
                                <input type="text" name="phone_number" placeholder="Phone number" required />
                            </div>

                            <div className="first">
                                <label htmlFor="message">Leave a Message</label>
                                <br />
                                <textarea name="message" id="message" placeholder="Leave a message" required></textarea>
                            </div>

                            <div className="agreement d-flex align-item-center">
                                <input type="checkbox" name="agreement" id="agreement" required />
                                <p>
                                    You agree to our friendly <a href="#">privacy policy</a>
                                </p>
                            </div>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};






const Sidebar = ({ setSelectedContent }) => (
    <div className="sidebar">
        <button onClick={() => setSelectedContent('terms')}>Terms and Condition</button>
        <button onClick={() => setSelectedContent('privacy')}>Privacy Policy</button>
        <button onClick={() => setSelectedContent('faqs')}>FAQs</button>
        <button onClick={() => setSelectedContent('p2p')}>P2P</button>
        <button onClick={() => setSelectedContent('contact')}>Contact Us</button>
    </div>
);

const MainContent = ({ selectedContent }) => {
    switch (selectedContent) {
        case 'terms':
            return <TermsAndConditions />;
        case 'privacy':
            return <PrivacyPolicy />;
        case 'faqs':
            return <FAQs />;
        case 'p2p':
            return <P2p_main />;
        case 'contact':
            return <ContactUs />;
        default:
            return <TermsAndConditions />;
    }
};

function HelpCopy() {
    const [selectedContent, setSelectedContent] = useState('terms');

    return (
        <>
            <Ex_info />

            <div className=" container help mt-5">
                < Header />

                <div className="row">

                    <div className="col-md-3">
                        <Sidebar setSelectedContent={setSelectedContent} />
                    </div>
                    <div className="col-md-9">
                        <MainContent selectedContent={selectedContent} />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default HelpCopy;