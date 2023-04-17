import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="app">
        <Routes>
          <Route path="/" />
          <Route path="/missions" />
          <Route path="/myprofile" />
        </Routes>
      </div>
    </>
  );
}

export default App;
