/**
 * This component renders the list of courses for the home page,
 * links to each "Course Detail" page, and to the "Create Course" screen
 */
import { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

const Courses = () => {
    
    /* courses is initialized as an array here (instead of an object like in the
       other components) so that the courses.map call later will work properly */
    const { data, actions } = useContext(Context);
    const [ courses, setCourses ] = useState([]);
    const hasFetchedData = useRef(false);

    useEffect(() => {
        if (!hasFetchedData.current) {
            data.getAllCourses()
                .then(courses => {
                    setCourses(courses);
                    if (courses && courses[1]) { actions.setIDs(courses.map(course => course.id)) };
                    hasFetchedData.current = true;
                });
        }
    }, [ actions, data ]);
  
    return (
        <main>
            <div className="wrap main--grid">
            {courses && courses[1] ?
                    courses.map(course => (
                        <Link 
                        className="course--module course--link" 
                        to={`/courses/${course.id}`} 
                        key={course.id}>
                            <h2 className="course--label">Course</h2>
                            <h3 className="course--title">{course.title}</h3>
                        </Link> ))
                    : null
                }
                <Link className="course--module course--add--module" to="/courses/create">
                    <span className="course--add--title">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 13 13" className="add"><polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon></svg>
                        New Course
                    </span>
                </Link>
            </div>
        </main>
    );
};

export default Courses;
