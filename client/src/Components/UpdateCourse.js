/**
 * This component renders a rorm allowing the user to update an existing
 * course or cancel and return to the "Course Detail" page
 */
import { useState, useContext, useEffect } from 'react';
import { useHistory, useParams, Redirect } from 'react-router-dom';
import { Context } from '../Context';
import Form from './Form';

const UpdateCourse = () => {
    
    const { id } = useParams();
    let history = useHistory();
    let { data, authenticatedUser } = useContext(Context);
    const [ course, setCourse ] = useState({});

    useEffect(() => {
        data.getCourse(id)
            .then(course => setCourse(course));
    }, [ data, id ]);

    // Destructure for later use
    const { title, description, estimatedTime, materialsNeeded } = course;

    // Handler for changes in form inputs updates state
    const change = (event) => {
        setCourse( prevValues => ({ 
            ...prevValues, 
            [event.target.name]: event.target.value 
        }));
    };

    // Handler for form submit button updates the course object
    const submit = () => {
        //course.userId = authenticatedUser.id;
        data.updateCourse(id, course, authenticatedUser.emailAddress, authenticatedUser.password)
            .then( errors => {
                if (errors.length) {
                    console.log(errors);
                    setCourse({errors});
                } else {
                   history.push(`/courses/${id}`);
                }
            }).catch( err => {
                console.log(err);
                return <Redirect to="/error" />;
            });
    };

    // Handler for form cancel button returns to "Course Detail" page
    const cancel = () => {
        history.push(`/courses/${id}`);
    };
    
    // If the course does not exist, redirect to "Not Found"
    if (course == null) {
        return <Redirect to="/notfound" />
    // If the user is not the course owner, redirect to "Forbidden"
    } else if (authenticatedUser.id !== course.userId) {
        return <Redirect to="/forbidden" />
    // If course exists and user is owner, render the form
    } else {
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

                                    <p>By {authenticatedUser.firstName} {authenticatedUser.lastName}</p>

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
}

export default UpdateCourse;
