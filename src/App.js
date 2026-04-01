import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Register from './Register';
import Product from './Product';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    <BasicRouting></BasicRouting>
    </div>
    
  );
}

function BasicRouting(){
  return( <div>
         <h1>transflower Store</h1>
        <Router>
        </Router>
        </div> );
}
    

function Home(){
  return(
  <div>
    <h2>Home</h2>
    <h3>hello from home page</h3>
  </div>
);
}

function About (){
  return(
  <div>
    <h2>About</h2>
    <h3>hello from about page</h3>
  </div>
);
}

function Contact(){
  return(

  <div>
    <h2>Contact</h2>
    <h3>hello from contact page</h3>
  </div>
);
}
export default App;
