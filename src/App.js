import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Page/Home/Home';
import Footer from './Page/Shared/Footer/Footer';
import Services from './Page/Services/Services';
import About from './Page/About/About';
import Header from './Page/Shared/Header/Header';
import Register from './Page/Register/Register';
import Login from './Page/Login/Login';
import Error from './Page/Error/Error';
import Appointment from './Page/Appointment/Appointment';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Private/PrivateRoute';
import Details from './Page/Details/Details';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
              <PrivateRoute path='/details/:serviceId'>
                <Details/>
              </PrivateRoute>    
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
        </AuthProvider>
    </div>
  );
}

export default App;
