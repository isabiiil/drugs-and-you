import React, {Component, useEffect} from 'react';
import '../css/TextBox.css'
import axios from 'axios'

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
	}
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.selectedDrug = this.selectedDrug.bind(this);
    }

 
    handleChange = (event) => { 
	this.setState({value:event.target.value});
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
    selectedDrug(event){
	this.setState({options:[]});
	this.setState({optionsLoaded:false});
	this.setState({sendRequest:true});
	this.setState({selected:event.target.value})
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
		this.setState({options:[]});
		this.setState({optionsLoaded:false});
		axios.post('http://127.0.0.1:5000/api/drug_names', {data:this.state.value}, {headers:{'content-type': 'text/json'}})
		    .then(res => {
			const data = res.data;
			if(data.drug_names[0].length > 1) { 
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
		loaded.push(<option value={option['drugs']}/>);
	    });
	}
	return(
	    <div>
		<form onSubmit={this.handleSubmit}>
		    <input list="drug-list" id="drugs" value={this.state.value} onChange={this.handleChange} placeholder="Enter any drugs or medications here" className="drugList" autocomplete="off" onSelected={this.selectedDrug}/>
		    <datalist id="drug-list">
			{loaded}
			</datalist>
		</form>
	    </div>
	);
    }
}

export default DrugComponent; 
