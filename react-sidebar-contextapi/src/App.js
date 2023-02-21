import React ,{useState}from 'react';
import {ThemeProvider} from 'styled-components';
import { GlobalStyle } from './styles/globalStyles';
import {darkTheme,lightTheme} from './styles/theme';
import {Routes,Route} from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { Diagnosis } from './Pages/Diagnosis';
import { Diagrams } from './Pages/Diagrams';
import { Statistics } from './Pages/Statistics';
import { Layouts } from './components/Layouts/Layouts';
import { Costomers } from './Pages/Costomers';

export const ThemeContext=React.createContext(null);

function App() {
  const [theme,setTheme]=useState('light');
  const themeStyle=theme==='light'?lightTheme:darkTheme;
  return (
    <ThemeContext.Provider value={{setTheme,theme}}>
    <ThemeProvider theme={themeStyle}>
      <GlobalStyle/>
     
     <Layouts>
      <div>
     <Routes>
      <Route  path='/' element={<HomePage/>} />
      <Route  path='/diag' element={<Diagnosis/>} />
      <Route  path='/dia' element={<Diagrams/>} />
      <Route  path='/sta' element={<Statistics/>} />
      <Route  path='/cust' element={<Costomers/>} />
      {/* <Route  path='/' element={<HomePage/>} /> */}
     </Routes>
     </div>
     </Layouts>
    </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
