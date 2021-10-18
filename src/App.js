import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Page/Home/Home';
import Footer from './Page/Shared/Footer/Footer';
import Services from './Page/Services/Services';
import About from './Page/About/About';
import Contact from './Page/Appointment/Appointment';
import Header from './Page/Shared/Header/Header';
import Register from './Page/Register/Register';
import Login from './Page/Login/Login';
import Error from './Page/Error/Error';
import Appointment from './Page/Appointment/Appointment';

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>    
              <Route path='/home'>
                <Home/>
              </Route>    
              <Route path='/about'>
                <About/>
              </Route>    
              <Route path='/services'>
                <Services/>
              </Route>    
              <Route path='/appointment'>
                <Appointment/>
              </Route>    
              <Route path='/register'>
                <Register/>
              </Route>    
              <Route path='/login'>
                <Login/>
              </Route>    
              <Route path='*'>
                <Error/>
              </Route>    
            </Switch>
            <Footer/>    
        </Router>  
    </div>
  );
}

export default App;
