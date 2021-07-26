
import './App.css';
import Landing from './components/Landing_page';
import {Route,Switch} from  "react-router-dom";
import Nav from './components/nav';
import About from './components/About_page';
import Work from './components/All_works';
import Schooling from './components/Schooling';
import './components/css/about.css';
import Resume from './components/resume';
import Footer from './components/footer';

function App() {
  
  return (<>
  <Nav></Nav>
  
    <Switch>
    <Route path="/" exact component={Landing}/>
    <Route path="/about" exact component={About}/>
    <Route path="/work"component={Work}/>
    <Route path="/myresume" component={Resume}></Route>
    <Route path="/about/schooling" component={Schooling}></Route>
    </Switch>

    <Footer></Footer>
 
  
  </>);
}

export default App;
