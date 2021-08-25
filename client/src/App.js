import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [ courses, setCourses ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/courses', { method: 'GET', mode: 'cors' })
      .then(response => response.json())
      .then(data => setCourses(data.courses));
  }, []);

  const titles = courses.map(course => course.title);
  let titleKey = 0;
  
  return (
    <>
      <header></header>
      <main>
        <div className="wrap main--grid">
          {titles.map(title => (
            <a 
              className="course--module course--link" 
              href="course-detail.html" 
              key={titleKey+=1}>
                <h2 className="course--label">Course</h2>
                <h3 className="course--title">{title}</h3>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
