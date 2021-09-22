
import './App.css';
//import Navbar from './components/Navbar';
import {BrowserRouter as Router ,Switch,Route  } from 'react-router-dom'
//import Sidebar from './components/Sidebar';
import Home from './pages';
import SigninPage from './pages/signin';
import getStarted from './pages/getStarted';
import IdeaPage from './components/IdeaPage'
function App() {
  return (
    
   <Router>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/signIn' component={SigninPage} exact />
      <Route path='/getstarted' component={getStarted} exact/>
      <Route path='/idea' component={IdeaPage} exact/>
    </Switch>
     
   </Router> 
   
      
  );
}

export default App;
