import React, {useState} from 'react';

const ToggleButton = props =>{
	let [state,setState] = useState({
		onColor:"white",
		offColor:"#5887fe"
	});

	const toggleButtonHandler = ()=>{
		let newColor=state.offColor;
		setState({
			offColor:state.onColor,
			onColor:newColor
		})
	}

	return(
		<div className="form-element">
			<label>{props.title}</label>
			<div className="toggle-button">
				<span className="on" onClick={toggleButtonHandler} 
					style={{backgroundColor:state.onColor,color:state.offColor}}>
					ON
				</span>
				<span className="off" onClick={toggleButtonHandler}
					style={{backgroundColor:state.offColor,color:state.onColor}}>
					OFF
				</span>
			</div>
		</div>
	);
}

export default ToggleButton;