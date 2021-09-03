import { useState, useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Context } from '../Context';
import Form from './Form';

const UpdateCourse = () => {
    
    let history = useHistory();
    let { data, authenticatedUser } = useContext(Context);
    const { id } = useParams();
    const [ course, setCourse ] = useState([]);

    useEffect(() => {
        data.getCourse(id)
            .then(course => setCourse(course));
    }, [ data, id ]);

    const change = (event) => {
        setCourse( prevValues => ({ 
            ...prevValues, 
            [event.target.name]: event.target.value 
        }));
    };

    const submit = () => {
        course.userId = authenticatedUser.id;
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

export default UpdateCourse;
