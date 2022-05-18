import { BrowserRouter, Route, Routes } from 'react-router-dom'
 import Login from './components/Login';
 import Signup from './components/Signup';
import Home from './components/Home.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
         <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
