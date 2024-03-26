// App.js
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/create';
import Login from './components/login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Create />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
