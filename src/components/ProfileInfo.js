import React from 'react';

// I'm inluding state here to make this almost a fully working 
// form that can take inputs and submit request and to store those input we need 
// memory(that's why state, although not mentioned whether this should submit or not but 
// just taking precautions i have made it ALMOST fully submitting form)

class ProfileInfo extends React.Component{
	state={
		id:new Date(),
		name:'',
		dob:'',
		pro:'',
		designation:''
	}

	onNameChange = (event) =>{
		this.setState({	name:event.target.value });
	}

	onDOBChange = (event) =>{
		this.setState({	dob:event.target.value });
	}
	onProChange = (event) =>{
		this.setState({	pro:event.target.value });
	}
	onDesignationChange = (event) =>{
		this.setState({	designation:event.target.value	});
	}

	resetHandler = ()=>{
		this.setState({
			id:new Date(),
			name:'',
			dob:'',
			pro:'',
			designation:''
		})
	}

	// submitForm = ()=>{
	// 	fetch("someUrl",{
	//       method:'post',
	//       headers:{ 'Content-Type':'application/json' },
	//       body: JSON.stringify({
	//         input:this.state
	//       })
	//     })
	//     .then(response=>response.json())
	//     .then(console.log);
	// }

	render(){
		return(
			<div className="outer-div">
			<div id="above-card">Profile Info</div>
			<div className="card">
				<div className="form-element">
					<label htmlFor="name">Name</label>
					<input id="name" type="text" className="form-input" maxLength="30" placeholder="eg. Tony" value={this.state.name} onChange={this.onNameChange}/>
				</div>
				<div className="form-element">
					<label htmlFor="DOB">DOB</label>
					<input id="DOB" type="date" className="form-input" value={this.state.DOB} onChange={this.onDOBChange}/>
				</div>
				<div className="form-element">
					<label htmlFor="Pro">Profession</label>
					<input id="Pro" type="text" className="form-input" maxLength="30" placeholder="eg. Android Dev" value={this.state.pro} onChange={this.onProChange}/>
				</div>
				<div className="form-element">
					<label htmlFor="Designation">Designation</label>
					<input id="Designation" type="text" className="form-input" maxLength="30" placeholder="eg. JR Dev" value={this.state.designation} onChange={this.onDesignationChange}/>
				</div>
				<div className="button-element">
					<input type="reset" id="cancel" value="Cancel" onClick={this.resetHandler}/>
					<input type="submit" id="submit" onClick={this.submitForm}/>
				</div>
			</div>
			</div>
		);
	}
}

export default ProfileInfo;