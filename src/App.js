import './App.css';
import Navbar from './components/NavBar';
import SideBar from './components/SideBar';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
    <SideBar />
      <Navbar />
    </Router>
  )
};

export default App;
