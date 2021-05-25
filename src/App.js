import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Screen/About/About';
import Dashboard from './Screen/Dashboard/Dashboard';
import Home from './Screen/Home/Home';
import Login from './Screen/Login/Login';
import Register from './Screen/Register/Register';
import PrivateRoute from './Firebase/PrivateRoute';
import {AuthProvider} from './Firebase/Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/about" component={About}/>
            <PrivateRoute path ="/dashboard" component={Dashboard}/>
          </Switch>
      </Router>
      </AuthProvider>
  );
}

export default App;
