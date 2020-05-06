import React from 'react';
import './App.css';
import Users from '../Users.json';
import Navbar from '../components/Navigation';
import Sidebar from '../components/Sidebar';
import Profile from '../components/ProfileInfo';
import Notification from '../components/Notification';
import Tasks from '../components/Tasks';

class App extends React.Component{
  // By default we have made the user signed in but we can make this dynamic as well
  // based upon login form but since not mentioned i've not made it here
  // But for testing of funcitonality, you can change the hardcoded like 
  // changing isSignedIn to false and similarly for others
  state={
    isSignedIn:true,
    route:"Profile",
    newUser:{ name:"", dob:"", pro:"", designation:"", tasks:[] }
  }

  // Fn to change what gets displayed based on clicks on menu
  onRouteChange = (route) =>{
    if(route==="Settings"){
      this.setState({route:"Profile"});
    }else{
      this.setState({route:route});
    }
  }

  render(){
    // currently this App is taking "Sanyam" as default user
    let user1;
    if(this.state.isSignedIn){
      [user1]=Users.filter(user=>user.name==="Sanyam");
    }else{
      user1={ name:"Login", dob:"", pro:"", designation:"", tasks:[]  }
    }
    return(
      <React.Fragment>
        <Navbar username={user1.name}/>
        <div id="main-display">
          <Sidebar onRouteChange={this.onRouteChange} tasks={user1.tasks}/>
          { this.state.route==="Profile"?<Profile/>
            :(this.state.route==="Notification"?<Notification/>:<Tasks task={this.state.route}/>)
          }
        </div>
      </React.Fragment>
    );
  }
}

export default App;
