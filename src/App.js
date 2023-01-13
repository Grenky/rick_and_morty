import './App.css';
import { Routes, Route, Link} from 'react-router-dom';
import About from './components/About';
import Characters from './components/Characters';
import Something from './components/Something';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
      <nav className='nav-menu'>
        <Link className='logo' alt='logo' to='/'></Link>
        <Link className='nav-link'to='Characters'>characters</Link>
        <Link className='nav-link' to='Something'>something</Link>
        <Link className='nav-link' to='About'>about</Link>
      </nav>
      
     </div>
     <Routes>
        <Route path="characters" element={<Characters />} />
        <Route path="something" element={<Something />} />
        <Route path="about" element={<About />} />
     </Routes>
    </div>
    
  );
}

export default App;
