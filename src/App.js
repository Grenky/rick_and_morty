import './App.css';
import { Routes, Route} from 'react-router-dom';
import About from './components/About';
import Characters from './components/Characters';
import Something from './components/Something';
import Home from './components/Home';
import Vagina from './components/Vagina';



function App() {


  return (
    
    <div className="App"> 
      <Home />
        <Routes>
            <Route path="characters" element={<Characters  />} />
            <Route path="something" element={<Something />} />
            <Route path="about" element={<About />} />
            <Route path="vagina" element={<Vagina />} />
        </Routes>    
     </div>    
  );
}


export default App;
