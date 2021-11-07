import React from "react";
import '../css/Introduction.css'
import Pills from '../assets/pills.jpeg'
export const Introduction = props => {
  return (
    <div>
      <h1 className='app_title'>Drugs And You</h1>
	  <div className='introduction_overall_wrapper'>
			<img src={Pills} alt="Pills" width="250" height="250"/>
			<div className='introduction_wrapper'>
				<ul>
					<li>
					<strong>
						Greetings!
						</strong>
					</li>
					This app will securely and privately check any interactions between the drugs you take and your prexisting health conditions.
					<li>
					Some interactions can be extremely dangerous. For instance if you have asthma, it would be ill advised to take Advil.
					</li> 
					<li>
						You can input your <strong>medications</strong> in the <strong>left</strong> input section.
					</li>
					<li>
					You can input your <strong>diseases</strong> in the <strong>right</strong> input section.
					</li>
					<li> 
					Your drug interactions <strong> will not</strong> be stored server-sided and <strong>will not</strong> presist on the UI. 
					</li> 
					You can press check interaction button to show possible interactions
					<li>
					<strong> Disclaimer: You should always call your doctor or pharmacists about possible interactions or concerns!!!</strong>
				
					</li>
				</ul>
				
			</div>
			<div>hello</div>	
	    </div>
	</div>
      );
	
};

export default Introduction; 
