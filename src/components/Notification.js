import React from 'react';
import ToggleButton from './Toggler';

const Notification = () =>{
	return(
		<div className="outer-div">
		<div id="above-card">Notifications</div>
		<div className="card">
			<ToggleButton title="Send all alerts"/>
			<ToggleButton title="Alerts only task success"/>
			<ToggleButton title="Alerts only for failed tasks"/>
			<ToggleButton title="I do not want any alerts"/>
			<div className="button-element">
				<input type="reset" id="cancel" value="Cancel"/>
				<input type="submit" id="submit"/>
			</div>
		</div>
		</div>
	);
}

export default Notification;