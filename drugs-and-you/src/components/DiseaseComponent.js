import React, {Component} from 'react';
import '../css/TextBox.css'
import UserDiseaseComponent from './UserDiseaseComponent.js'
import axios from 'axios' 
class DiseaseComponent extends Component {
    constructor(props){
	super(props);
	this.state = {
	    selected: '',
	    value: '',
	    selectedConditions: [],
	    sendRequest: false,
	    timeout: null,
	    diseaseName: '',
	    diseaseNameLoaded: false,
	}
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.selectedDisease = this.selectedDisease.bind(this);
    }

 
    handleChange = (event) => { 
	this.setState({value:event.target.value});
	if(this.state.timeout === null){
	    this.state.timeout = setTimeout(()=>{
		if(this.state.timeout !== null){
			this.setState({sendRequest: true});
		}
	}, 1500);
	}
    }
    selectedDisease(event){
	this.setState({sendRequest:true});
	this.setState({selectedConditions:[...this.state.selectedConditions,this.state.value]})
	this.setState({value:''});
    }
    
    handleSubmit(event){
	if(this.state.selected.length === 0){ 
	    this.setState({sendRequest:true});
	}
	event.preventDefault();
    }
    
    componentDidUpdate(){
	if(this.state.sendRequest === true){
	    if(this.state.selected.length === 0 && this.state.value.length !== 0){
		axios.post('http://127.0.0.1:5000/api/disease_related_names', {data:this.state.value}, {headers:{'content-type': 'text/json'}})
		    .then(res => {
			const data = res.data;
			this.setState({diseaseName:data['disease_related_names'][0]['disease_related_name']});
			this.setState({diseaseNameLoaded:true});
			this.setState({value:''});
		    })
	    }
	    this.setState({sendRequest: false});
	    this.setState({timeout: null});
 	}
    }
    
    render(){
	var loaded = null;
	if(this.state.awaitRequest === true){
	    
	}
	if(this.state.diseaseNameLoaded === true){
	    loaded = <option> {this.state.diseaseName}</option>;
	}
	return(
	    <div>
		<UserDiseaseComponent selectedConditions={this.state.selectedConditions}/> 
		<form onSubmit={this.handleSubmit}>
		    <input list="diseaseList" id="diseases" value={this.state.value} onChange={this.handleChange} placeholder="Enter any disease or preexisting medical conditions" className="diseaseList" autocomplete="off" onselected={this.selectedDisease}/>
		    <datalist id="diseaseList">
			{loaded}
			</datalist>
		</form>
		<div>
		    
		    <button class="button" onClick={this.selectedDisease}>
		Add Health Condition
	    </button>
	    </div>
		</div>
	);
    }
}

export default DiseaseComponent; 
