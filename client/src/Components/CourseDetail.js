import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CourseDetail = () => {
    
    const id = 1;
    // let pKey = 0;
    // let liKey = 0;
    
    const [ course, setCourse ] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/courses/${id}`)
            .then(response => {
                setCourse(response.data.course);
            });
    }, []);
    
    console.log(course);
    
    return (
        <main>
            <div className="actions--bar">
                <div className="wrap">
                    <Link className="button" to={`/courses/${course.id}/update`}>Update Course</Link>
                    <Link className="button" to={`/courses/${course.id}/delete`}>Delete Course</Link>
                    <Link className="button button-secondary" to="/">Return to List</Link>
                </div>
            </div>
            
            <div className="wrap">
                <h2>Course Detail</h2>
                <form>
                    <div className="main--flex">
                        <div>
                            <h3 className="course--detail--title">Course</h3>
                            <h4 className="course--name">{course.title}</h4>
                            {/* <p>By {course.user.firstName} {course.user.lastName}</p> */}

                            {/* {course.description.split('\n').map(p => <p key={pKey+=1}>{p}</p> )} */}
                        </div>
                        <div>
                            <h3 className="course--detail--title">Estimated Time</h3>
                            <p>{course.estimatedTime}</p>

                            <h3 className="course--detail--title">Materials Needed</h3>
                            <ul className="course--detail--list">
                                {/* {course.materialsNeeded.substring(2).split('\n*')
                                    .map(li => <li key={liKey+=1}>{li}</li> )} */}
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default CourseDetail;