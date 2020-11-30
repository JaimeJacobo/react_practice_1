import React from 'react'
import './App.css';
import Header from './components/Header'
import Greet from './components/Greet'

class App extends React.Component {

  user = {
    username: "jaimejaime",
    email: "jaime@jaime.com",
    avatar: "https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
  }

  checkForAvatar = ()=>{
    if(this.user.avatar){
      return <img src={this.user.avatar} alt={this.user.username}/>
    } else {
      return <img src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="Default user"/>
    }
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Greet email={this.user.email} username={this.user.username}/>
        {this.checkForAvatar()}
        <p>{this.user.username === 'jaimejacobo' ? 'Welcome teacher!!!' : 'Welcome student'}</p>
      </div>
    );
  }
}

export default App;
