import React from "react";

export const Introduction = props => {
  return (
    <div>
      <div className='app_title'>Drugs And You</div>
      <h1 className='introduction_overall_wrapper'>  Introduction</h1>
      <div className='introduction_wrapper'>
         <div>Greetings. This app will check interactions between the drugs you take and your health conditions.</div>
         <div>Some interactions can be dangerous. For instance if you have asthma, you shouldn't take advil.</div>
         <div>You can input your medications in the left input section.</div>
         <div>You can input your diseases in the right input section.</div> 
         <div>We will temporary store your selections of drugs and diseases</div>
         <div>You can press check interaction button to show possible interactions</div>
         <div>Disclaimer: You should always call your doctor or pharmacists about possible interactions or concerns.</div>    
      </div>
    </div>
      );
    };