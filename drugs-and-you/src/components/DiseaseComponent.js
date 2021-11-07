import React, {Component, useEffect} from 'react';

class DiseaseComponent extends Component {
    constructor(props){
	super(props);
	this.state = {
	    value: '',
	    sendRequest: false,
	    timeout: null,
	    optionsLoaded: false, 
	}
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this); 
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

    handleSubmit(event){
	this.setState({sendRequest:true});
	this.setState({timeout:null});
	event.preventDefault();
    }
    
    componentDidUpdate(){
	if(this.state.sendRequest === true && this.state.timeout !== null){
	    if(this.state.value === undefined || this.state.value.length !== 0){
		console.log(this.state.value);
	    }
	    this.setState({sendRequest: false});
	    this.setState({timeout: null});
	}
	else if(this.state.sendRequest === true){
	    if(this.state.value === undefined || this.state.value.length !== 0){
		console.log(this.state.value);
	    }
	    this.setState({sendRequest:false});
	}
    }
    
    render(){
	var awaitingRequest = null;
	var optionsLoaded = [];
	if(this.state.awaitRequest === true){
	    
	}
	if(this.state.optionsLoaded === true){
	    optionsLoaded.push(<option value="Chocolate" />);
	    optionsLoaded.push(<option value="Coconut" />);
	}
	return(
	    <div>
		<p> Input Text </p>
		<form onSubmit={this.handleSubmit}>
		    <input list="disease-list" id="disease" value={this.state.value} onChange={this.handleChange}/>
		    <datalist id="disease-list">
			{optionsLoaded}
			</datalist>
		</form>
	    </div>
	);
    }
}

export default DiseaseComponent; 
