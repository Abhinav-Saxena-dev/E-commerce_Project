import './App.css';
import HomePage from './Pages/HomePage/Homepage.component';
import {Switch, Route} from 'react-router-dom';
// import HatsPage from './Pages/HatsPage/Hatspage.component';
import ShopPage from './Pages/ShopPage/ShopPage.component';
import Header from './Components/header/Header.component';
import SignInAndSignUp from './Pages/Sign-in-and-up/Sign-in-and-up.component';
import {auth} from './firebase/firebase.utils'
import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      currentUser : null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
        });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth(); 
  }

  render(){
  return (
    <div>
      <Header currentUser = {this.state.currentUser} />
      <Switch>
        <Route exact path= '/' component = {HomePage} />
        <Route path='/hats' component = {ShopPage} />
        <Route path='/signin' component = {SignInAndSignUp} />
      </Switch>
    
    </div>
  );
}
}

export default App;
