import './App.css';
import { Routes, Route} from 'react-router-dom';
import About from './components/About';
import Characters from './components/Characters';
import Something from './components/Something';
import Home from './components/Home';

function App() {
  
  return (
    
    <div className="App"> 
      <Home />
        <Routes>
            <Route path="characters" element={<Characters />} />
            <Route path="something" element={<Something />} />
            <Route path="about" element={<About />} />
        </Routes>    
     </div>    
  );
}


export default App;
