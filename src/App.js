import './App.css';
import HomePage from './Pages/HomePage/Homepage.component';
import {Switch, Route} from 'react-router-dom';
import HatsPage from './Pages/HatsPage/Hatspage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path= '/' component = {HomePage} />
        <Route path='/hats' component = {HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
