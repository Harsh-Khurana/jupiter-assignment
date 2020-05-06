import React from 'react';

const initialState={
	source:'Source Y',
	logging:false,
	text:"Provide SQL here",
	result:'Result 1'
}

// As the values changes the initial state which we are using as memory store
// for the values gets updated which we can pass(i.e. POST,PUT or anything
// that we would like to do with data). 
// **Although not mentioned to submit any data, i still have provided the 
// functionality just as a precaution.
// Only the submit button is need to be connected hence making this a fully working form!!

class Tasks extends React.Component{
	state={...initialState};

	sourceOptionHandler = (event)=>{
		this.setState({	source:event.target.value });
	}

	checkboxHandler = () =>{
		this.setState({ logging:!this.state.logging });
	}

	textHandler = (event)=>{
		this.setState({ text:event.target.value });
	}

	resultOptionHandler = (event)=>{
		this.setState({ result:event.target.value });
	}

	resetHandler = () =>{
		this.setState({...initialState});
	}

	// One more thing to note here is since tasks for now are not actual tasks 
	// for now i have considered them as strings and i'm displaying seprate 
	// Task component on the basis of the task clicked , but in future these tasks
	// can be expanded to be objects that have several things and hence this component
	// then can also be expanded according to those particular tasks.
	// For now based upon task difference is quite minor in components
	render(){
		return(
		<div className="outer-div">
		<div id="above-card">{this.props.task}</div>
		<div className="card">
			<div className="form-element">
				<label>Source Name</label>
				<select value={this.state.source} className="toggle-elements" onChange={this.sourceOptionHandler}>
					<option value="Source X">Source X</option>
					<option value="Source Y">Source Y</option>
					<option value="Source Z">Source Z</option>
				</select>
			</div>
			<div className="form-element">
				<label>Enable logging</label>
				<input id="checkbox-enable" type="checkbox" onChange={this.checkboxHandler} checked={this.state.logging} value="logging"/>
			</div>
			<div className="form-element">
				<label id="shift-right-sql">Provide SQL</label>
				<textarea className="toggle-elements" onChange={this.textHandler} value={this.state.text}></textarea>
			</div>
			<div className="form-element">
				<label>Target Result</label>
				<select className="toggle-elements" value={this.state.result} onChange={this.resultOptionHandler}>
					<option value="Result 1">Result 1</option>
					<option value="Result 2">Result 2</option>
					<option value="Result 3">Result 3</option>
					<option value="Result 4">Result 4</option>
				</select>
			</div>
			<div className="button-element">
				<input type="reset" id="cancel" onClick={this.resetHandler} value="Cancel"/>
				<input type="submit" id="submit"/>
				<input type="button" id="validate" value="Validate"/>
			</div>
		</div>
		</div>
	);
	}
}

export default Tasks;