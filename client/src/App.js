import { BrowserRouter } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
// import Courses from './Components/Courses';
import CourseDetail from './Components/CourseDetail';

function App() {
  return (
    <BrowserRouter>
      <Header />
      {/* <Courses /> */}
      <CourseDetail />
    </BrowserRouter>
  );
}

export default App;
