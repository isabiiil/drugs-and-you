import React, {Component, useEffect} from 'react';
import '../css/TextBox.css'
import axios from 'axios'
import UserDrugsComponent from './UserDrugsComponent.js';

class DrugComponent extends Component {
    constructor(props){
	super(props);
	this.state = {
	    value: '',
	    selected: '',
	    sendRequest: false,
	    timeout: null,
	    optionsLoaded: false,
	    options: [],
	    selectedDrugs: [],
	}
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.selectedDrug = this.selectedDrug.bind(this);
    }

 
    handleChange = (event) => { 
	this.setState({value:event.target.value});
	this.setState({id:event.target.id}); 
	if(this.state.timeout === null){
	    if(this.state.selected.length !== 0){
	    this.state.timeout = setTimeout(()=>{
		if(this.state.timeout !== null){
			this.setState({sendRequest: true});
		}
	}, 1500);
	    }
	}
    }
    selectedDrug(){
	this.setState({options:[]});
	this.setState({optionsLoaded:false});
	this.setState({sendRequest:true});
	this.setState({selectedDrugs:[...this.state.selectedDrugs,this.state.value]});
	this.setState({value:''});
	console.log(this.state.selectedDrugs);
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
		this.setState({options:[]});
		this.setState({optionsLoaded:false});
		axios.post('http://127.0.0.1:5000/api/drug_names', {data:this.state.value}, {headers:{'content-type': 'text/json'}})
		    .then(res => {
			const data = res.data;
			if(!data['drug_names'][0].includes('sorry')){
			data['drug_names'][0].map((drugs) => {
			    var drugObject = {
				drugs: drugs['drug_name'],
				id: drugs['id']
			    }
			    this.setState({
				options: [...this.state.options, drugObject]});
			    this.setState({
				optionsLoaded:true});
			})
			}
		    })
	    }
	    this.setState({sendRequest: false});
	    this.setState({timeout: null});
 	}
    }
    
    render(){
	var loaded = [];
	if(this.state.awaitRequest === true){
	    
	}
	if(this.state.optionsLoaded === true){
	    this.state.options.map((option)=>{
		loaded.push(<option value={option['drugs']} />);
	    });
	}
	return(
	    <div>
		
	    <UserDrugsComponent selectedDrugs={this.state.selectedDrugs} />
		<form onSubmit={this.handleSubmit}>
		    <input list="drug-list" id="drugs" value={this.state.value} onChange={this.handleChange} placeholder="Enter any drugs or medications here" className="drugList" autocomplete="off"/>
		    <datalist id="drug-list">
			{loaded}
			</datalist>
		</form>
		<div>
		    <button onClick={this.selectedDrug} class="button">
			Add Medication 
			</button>
			</div>
	    </div>
	    
	);
    }
}

export default DrugComponent; 
