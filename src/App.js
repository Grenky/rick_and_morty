import './App.css';
import { Routes, Route} from 'react-router-dom';
import About from './components/About';
import Characters from './components/Characters';
import Something from './components/Something';
import Home from './components/Home';
import RenderTest from './components/RenderTest';
import Yes from './components/Yes';
import No from './components/No';
import Ccomponent from './components/Ccomponent';

function App() {

  function adata() {
    return(
      new Date().toLocaleDateString()
    )
  }

  return (
    
    <div className="App"> 
      <Home />
        <Routes>
            <Route path="characters" element={<Characters  />} />
            <Route path="something" element={<Something />} />
            <Route path="about" element={<About adata={adata}/>} />
            <Route path="RenderTest" element={<RenderTest />} />
            <Route path="Yes" element={<Yes />} />
            <Route path="No" element={<No />} />
            <Route path="Ccomponent" element={<Ccomponent />} />
        </Routes>   
     </div>    
  );
}


export default App;
