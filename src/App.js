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
import { useDispatch, useSelector } from 'react-redux';

function App() {

  function adata() {
    return(
      new Date().toLocaleDateString()
    )
  }


  const dispatch = useDispatch()
  const cash = useSelector( state => state.cash)
  

  const addCash = () => {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = () => {
    dispatch({type: "GET_CASH", payload: cash})
  }



  return (
    
    <div className="App"> 
      <Home />
        <Routes>
            <Route path="characters" element={<Characters  name={'Gena'}/>} />
            <Route path="something" element={<Something />} />
            <Route path="about" element={<About adata={adata}/>} />
            <Route path="RenderTest" element={<RenderTest />} />
            <Route path="Yes" element={<Yes />} />
            <Route path="No" element={<No />} />
            <Route path="Ccomponent" element={<Ccomponent />} />
        </Routes> 
        <div className='redux-test'>{cash}</div>
        <button className='redux-btn' onClick={() => addCash(Number(prompt()))}>click</button>
        <button className='redux-btn2' onClick={() => getCash(Number(prompt()))}>click</button>
     </div>    
  );
}


export default App;
