import './App.css';
import Navbar from './components/Navbar';
import Category from './components/Category';
import About from './components/About';
import Client from './components/Client';

function App() {
  return (
     <>
       <Navbar />
       <Category />
       <Client />
       <About />
     </>  
  );
}

export default App;
