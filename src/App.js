import './App.css';
import { Route, Routes } from 'react-router-dom';
import "./sb-admin-2.min.css";
import Dashboard from "./Dash/Dashboard"
import Login from './Login/Login';
import Portal from './Portal';
import Charts from './Charts/Charts';
import Cards from './Cards/Cards';
import Button from './Buttons/Button';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/portal" element={<Portal />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="charts" element={<Charts />} />
        <Route path="cards" element={<Cards />} />
        <Route path="buttons" element={<Button />} />
        <Route path="*" element={<Login />} />
      </Route>

    </Routes>

  );
}

export default App;
