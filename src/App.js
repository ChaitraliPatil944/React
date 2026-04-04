import { BrowserRouter as Router , Link ,Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Register from './Register';
import Product from './Product';
import List from './List';
import Orders from './Orders';



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
         <hr/>
        <Router>
          <Link to="/">Home</Link> | 
          <Link to="/about">About</Link> | 
          <Link to="/contact">Contact us |</Link>
          <Link to ="/login">Login</Link> | 
          <Link to="/register">Register</Link> | 
          <Link to="/bikes">Product</Link> |
          <Link to="/orders">Orders</Link>
          <hr/>
          <Routes>
            <Route exact path ="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            
            <Route path="/register" element={<Register/>}/>
            <Route path="/bikes" element={<List/>}/>
            <Route path="/orders" element={<Orders/>}/>
          </Routes>
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
