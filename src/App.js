
import './App.css';
//import Navbar from './components/Navbar';
import {BrowserRouter as Router ,Switch,Route  } from 'react-router-dom'
//import Sidebar from './components/Sidebar';
// import "./components/Faq/scss/main.scss"
import Home from './pages';
import SigninPage from './pages/signin';
import getStarted from './pages/getStarted';
import IdeaPage from './components/IdeaPage'
import Explorepage from './pages/explorepage';
import Faq from './pages/Faq';
function App() {
  return (
    
   <Router>
    <Switch>
      <Route path='/' component={Home} exact />
      <Route path='/signIn' component={SigninPage} exact />
      <Route path='/getstarted' component={getStarted} exact/>
      <Route path='/idea' component={IdeaPage} exact/>
      <Route path='/explore' component={Explorepage} exact/>
      <Route path='/faq' component={Faq} exact/>
    </Switch>
     
   </Router> 
   
      
  );
}

export default App;
