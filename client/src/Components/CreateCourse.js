import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../Context';
import Form from './Form';

const CreateCourse = () => {
    
    let history = useHistory();
    let { data, authenticatedUser } = useContext(Context);

    const [ course, setCourse ] = useState([]);

    const change = (event) => {
        setCourse( prevValues => ({ 
            ...prevValues, 
            [event.target.name]: event.target.value 
        }));
    };

    const submit = () => {
        course.userId = authenticatedUser.id;
        data.createCourse(course, authenticatedUser.emailAddress, authenticatedUser.password)
            .then( errors => {
                if (errors.length) {
                    console.log(errors);
                    setCourse({errors});
                } else {
                   history.push(`/`);
                }
            }).catch( err => {
                console.log(err);
                // TODO add an error route with `history.push('/error')`
            });
    };

    const cancel = () => {
        history.push('/');
    };

    return (
        <main>
            <div className="wrap">
                <h2>Create Course</h2>
                <Form
                    cancel={cancel}
                    errors={course.errors}
                    submit={submit}
                    submitButtonText="Create Course"
                    elements={ () => (
                        <div className="main--flex">
                            <div>
                                <label htmlFor="title">Course Title</label>
                                <input 
                                    id="title" 
                                    name="title" 
                                    type="text" 
                                    onChange={change} />

                                <p>By {authenticatedUser.firstName} {authenticatedUser.lastName}</p>

                                <label htmlFor="description">Course Description</label>
                                <textarea 
                                    id="description" 
                                    name="description" 
                                    onChange={change} />
                            </div>
                            <div>
                                <label htmlFor="estimatedTime">Estimated Time</label>
                                <input 
                                    id="estimatedTime" 
                                    name="estimatedTime" 
                                    type="text" 
                                    onChange={change} />

                                <label htmlFor="materialsNeeded">Materials Needed</label>
                                <textarea 
                                    id="materialsNeeded" 
                                    name="materialsNeeded" 
                                    onChange={change} />
                            </div>
                        </div>
                    )} />
            </div>
        </main>
    );
}

export default CreateCourse;
