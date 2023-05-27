// versão 18 do React descarta a necessidade de importá-lo

import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import { BrowserRouter } from 'react-router-dom';

// function App () {}
// ou
const App = () => {
  return (
    <>
      <Header />

      <BrowserRouter >
        <Navbar />
      </BrowserRouter>
      
      <Resume />

      <Portfolio />

      <Contact />
    </>
  )
};

export default App;
