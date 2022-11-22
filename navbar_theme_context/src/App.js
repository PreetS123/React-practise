import { useContext } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { ThemeContext } from './Context/ThemeContext';

function App() {
  const {isLight}= useContext(ThemeContext);
  return (
    <div className={`App ${isLight?'light':'dark'} `}>
        <Navbar/>
    </div>
  );
}

export default App;
