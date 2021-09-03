import { useState, useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Context } from '../Context';
import Form from './Form';
import axios from 'axios';

const UpdateCourse = () => {
    
    let history = useHistory();
    let { data, authenticatedUser } = useContext(Context);
    const { id } = useParams();
    const [ course, setCourse ] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/courses/${id}`)
            .then(response => {
                setCourse(response.data);
            });
    }, [ id ]);

    const change = (event) => {
        console.log(course);
        setCourse({ [event.target.name]: event.target.value });
        console.log(course);
    };

    const submit = () => {
        console.log(course);
        console.log(authenticatedUser);
        data.api(`/courses/${course.id}`, 'PUT', course, true, { emailAddress: authenticatedUser.emailAddress, password: authenticatedUser.password })
            .then( response => {
                console.log(response.status)
                if (response.errors.length) {
                    console.log(response.errors);
                    setCourse({errors: response.errors});
                } else {
                     history.push(`/courses/${course.id}`);
                }
            }).catch( err => {
                console.log(err);
                // TODO add an error route with `history.push('/error')`
            });
    };

    const cancel = () => {
        history.push(`/courses/${id}`);
    };

    const { title, description, estimatedTime, materialsNeeded } = course;
    
    return (
        <main>
            <div className="wrap">
                <h2>Update Course</h2>
                <Form
                    cancel={cancel}
                    errors={course.errors}
                    submit={submit}
                    submitButtonText="Update Course"
                    elements={ () => (
                        <div className="main--flex">
                            <div>
                                <label htmlFor="title">Course Title</label>
                                <input 
                                    id="title" 
                                    name="title" 
                                    type="text" 
                                    value={title} 
                                    onChange={change} />

                                <p>By Joe Smith</p>
                                {/* <p>By {user.firstName} {user.lastName}</p> */}

                                <label htmlFor="description">Course Description</label>
                                <textarea 
                                    id="description" 
                                    name="description" 
                                    value={description} 
                                    onChange={change} />
                            </div>
                            <div>
                                <label htmlFor="estimatedTime">Estimated Time</label>
                                <input 
                                    id="estimatedTime" 
                                    name="estimatedTime" 
                                    type="text" 
                                    value={estimatedTime} 
                                    onChange={change} />

                                <label htmlFor="materialsNeeded">Materials Needed</label>
                                <textarea 
                                    id="materialsNeeded" 
                                    name="materialsNeeded" 
                                    value={materialsNeeded} 
                                    onChange={change} />
                            </div>
                        </div>
                    )} />
            </div>
        </main>
    );
}

export default UpdateCourse;
