import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import Courses from './Components/Courses';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Courses />
    </BrowserRouter>
  );
}

export default App;
