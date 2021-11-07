import React from "react";
import '../css/Introduction.css'
import Pills from '../assets/pills.jpeg'
import Doctors from '../assets/doctors.jpeg'
export const Introduction = props => {
  return (
    <div>
      <h1 className='app_title'>Drugs & You</h1>
	  <div className='introduction_overall_wrapper'>
			<img src={Pills} alt="Pills" width="250" height="250"/>
	      <div className='introduction_wrapper'>
		  <div style={{'textAlign':'center'}}>
						<strong>
							Greetings!
						</strong>
		  </div>
		  
		  <div style={{'paddingTop': '10px'}}>
					This app will securely and privately check any interactions between the drugs you take and your prexisting health conditions.
			    </div>
			    
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
					<div>
					You can press check interaction button to show possible interactions
					</div>
					<div>
					<strong> Disclaimer: You should always call your doctor or pharmacists about possible interactions or concerns!!!</strong>
				
					</div>
				
			</div>
	  <div><img src={Doctors} width="250" height= "250"/></div>	
	    </div>
	</div>
      );
	
};

export default Introduction; 
