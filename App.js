import { Route, Routes } from "react-router";
import {BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route path='/' element={<Login/>}>
    </Route>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
