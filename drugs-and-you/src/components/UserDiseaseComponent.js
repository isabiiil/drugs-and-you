import React, {Component} from "react";
import '../css/UserDrugsComponent.css'

class UserDiseaseComponent extends Component {
    constructor(props){
	super(props);
	this.state = {
	}
    }
    render(){
	var diseases = [];
	var {selectedConditions} = {...this.props}
	window.selectedConditions = selectedConditions;
	selectedConditions.map((moreDiseases)=>{
	    diseases.push(
		<div className="addedDrugs">
		<li>
		{moreDiseases} </li>
		    </div>)
	})
	return(
	    <div>
		{diseases}
	   
	</div>
	);

    }
}
export default UserDiseaseComponent;
