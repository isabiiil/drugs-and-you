import React from "react";
import '../css/Introduction.css'
import Pills from '../assets/pills.jpeg'
export const Introduction = props => {
  return (
    <div>
      <div className='app_title'>Drugs And You</div>
	<h1 className='introduction_overall_wrapper'>Drugs And You</h1>
	  <img src={Pills} alt="Pills" width="250" height="250"/>
	<div className='introduction_wrapper'>
	    <div style={{'text-align':'center'}}>
		<strong>
		    Greetings!
		    </strong>
	    </div>
	    This app will securely and privately check any interactions between the drugs you take and your prexisting health conditions.
	    <div>
		Some interactions can be extremely dangerous. For instance if you have asthma, it would be ill advised to take Advil.
		</div> 
	 <div>
             You can input your <strong>medications</strong> in the <strong>left</strong> input section.
	 </div>
	    <div>
		You can input your <strong>diseases</strong> in the <strong>right</strong> input section.
	    </div>
	  <div> 
	      Your drug interactions <strong> will not</strong> be stored server-sided and <strong>will not</strong> presist on the UI. 
	  </div> 
          You can press check interaction button to show possible interactions
	  <div>
	  <strong> Disclaimer: You should always call your doctor or pharmacists about possible interactions or concerns!!!</strong></div>
	  
      </div>
	</div>
      );
};

export default Introduction; 
