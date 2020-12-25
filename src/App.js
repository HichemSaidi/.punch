import logo from './logo.svg';
import './App.css';
import HeroBanner from './components/HeroBanner';
import Navbar from'./components/Navbar';

function App() {
  return (
    <div className='container'>
      <Navbar></Navbar>
      <HeroBanner></HeroBanner>
     
    </div>
  );
}

export default App;
