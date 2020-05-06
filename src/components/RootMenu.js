import React ,{useState} from 'react';

const RootMenu = props =>{
	let [state,setState] = useState({
		isDisplay:"none"
	});

	const displayToggler = () =>{
		if(state.isDisplay==="none"&&props.items){
			setState({
				isDisplay:"block"
			})
		}else{
			setState({
				isDisplay:"none"
			})
		}
	}

	return(
		<div>
			<div>
				<div className="sidebar-element sidebar-header" onClick={displayToggler}>{props.header}</div>
				<ul style={{display:state.isDisplay}}>
					{
						props.items.map((item,i)=>{
							return <li className="sidebar-element" onClick={()=>{props.onRouteChange(item)}} key={i}>{item}</li>
						})
					}
				</ul>
			</div>
		</div>
	);
}

export default RootMenu;