import React from 'react';
import RootMenu from './RootMenu';

const Sidebar = props =>{
	// getting all the tasks of a user
	const tasks = props.tasks.map(task=>task);

	return(
		<div className="adjust-sidebar">
			<RootMenu header={"Profile"} onRouteChange={props.onRouteChange} items={["Settings","Notification"]} />			
			<RootMenu header={"My Tasks"} onRouteChange={props.onRouteChange} items={tasks} />			
		</div>
	);
}

export default Sidebar;