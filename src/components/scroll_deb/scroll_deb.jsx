import React from 'react';
import './scroll_deb.css';
// import phone from '../../asset/pharste_mobuile.png';
import cad_nig from '../../asset/cad-nig.png';
import save_ben from '../../asset/save-beneficiary.png';
import sm_success from '../../asset/sm-success.png';
function ScrollDep(){


    return(
       <>
        <div className="scroll_deb_container">
         
        <div className="scroll_deb_container_real">
        <h1>How it works</h1>
        <p>Simplified. Fast. Secure.</p>
        <div className="  inner_bg">

         <div className="scroll_deb">
              <div className="row d-flex mb-4 align-items-center justify-content-center ">
           <div className=" col-md-6">
            <div className="content_list">
                <div className="content_box">
                    <img src={cad_nig} alt="cad-nig" />
                </div>
            </div>
</div>
<div className="col-md-6">
   <div className="content_typo">
    <h1 className="content_title">SEND MONEY IN JUST A FEW TABS</h1>
    <p className="content_paragraph">Quickly initiate your 
        transfer—no complex steps.
         It’s that easy!</p>
   </div>
</div>
           </div>




            <div className="row d-flex mb-4 align-items-center justify-content-center ">
           <div className=" col-md-6">
            <div className="content_list">
                <div className="content_box">
                    <img src={save_ben} alt="save_ben image" />
                </div>
            </div>
</div>
<div className="col-md-6">
   <div className="content_typo">
    <h1 className="content_title">choose the recipient and  enter the amount</h1>
    <p className="content_paragraph">Select who you're sending to, and select the amount you want to send.</p>
   </div>
</div>
           </div>






            <div className="row d-flex mb-4 align-items-center justify-content-center ">
           <div className=" col-md-6">
            <div className="content_list">
                <div className="content_box">
                    <img src={sm_success} alt="sm success image" />
                </div>
            </div>
</div>
<div className="col-md-6">
   <div className="content_typo">
    <h1 className="content_title">complete and track your transfer in real-time</h1>
    <p className="content_paragraph">Confirm your transaction, and stay updated every step of the way with real-time tracking.</p>
   </div>
</div>
           </div>
         </div>
</div>
        </div>
        </div>
       </>
    );
}


export default ScrollDep