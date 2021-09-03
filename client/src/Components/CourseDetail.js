import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

const CourseDetail = () => {
    
    const { id } = useParams();
    const [ course, setCourse ] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/courses/${id}`)
            .then(response => {
                setCourse(response.data);
            });
    }, [ id ]);
        
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
                            {/* {console.log(course.user)} */}
                            <p>By Joe Smith {/* course.user.firstName} {course.user.lastName */}</p>
                            
                            <ReactMarkdown>{course.description}</ReactMarkdown>
                        </div>
                        <div>
                            <h3 className="course--detail--title">Estimated Time</h3>
                            <p>{course.estimatedTime}</p>

                            <h3 className="course--detail--title">Materials Needed</h3>
                            <ul className="course--detail--list">
                                <ReactMarkdown>{course.materialsNeeded}</ReactMarkdown>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
};

export default CourseDetail;