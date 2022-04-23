import './App.css';
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import Auth from './pages/Auth/Auth';
function App() {
  return (
    <Routes>
      <Route exact path='/' element={<HomePage />}></Route>
      <Route path='/auth' element={<Auth />}></Route>
    </Routes>
  );
}

export default App;
