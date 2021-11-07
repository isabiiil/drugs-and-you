import React, {Component} from "react";
import '../css/UserDrugsComponent.css'

class UserDrugsComponent extends Component {
    constructor(props){
	super(props);
	this.state = {
	}
    }
    render(){
	console.log(this.props);
	var drugs = [];
	var {selectedDrugs} = {...this.props}
	selectedDrugs.map((moreDrugs)=>{
	    drugs.push(
		<div className="addedDrugs">
		<li>
		{moreDrugs} </li>
		    </div>)
	})
	return(
	    <div>
		{drugs}
	   
	</div>
	);

    }
}
export default UserDrugsComponent;
 
