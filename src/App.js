import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './Screen/About/About';
import ContactForm from './Screen/Contact/ContactForm';
import Course from './Screen/Course/Course';
import Education from './Screen/Dashboard/Education';
import Home from './Screen/Home/Home';
import Login from './Screen/Login/Login';
import Register from './Screen/Register/Register';

function App() {
  return (
      <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/course" component={Course}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={ContactForm}/>
            <Route path="/contact" component={Education}/>
          </Switch>
      </Router>
  );
}

export default App;
