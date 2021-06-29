import './App.css';
import HomePage from './Pages/HomePage/Homepage.component';
import {Switch, Route} from 'react-router-dom';
// import HatsPage from './Pages/HatsPage/Hatspage.component';
import ShopPage from './Pages/ShopPage/ShopPage.component';
import Header from './Components/header/Header.component';
import SignInAndSignUp from './Pages/Sign-in-and-up/Sign-in-and-up.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path= '/' component = {HomePage} />
        <Route path='/hats' component = {ShopPage} />
        <Route path='/signin' component = {SignInAndSignUp} />
      </Switch>
    
    </div>
  );
}

export default App;
