import { useContext, useEffect } from 'react';
import { Context } from '../Context';
import { useParams, useHistory } from 'react-router-dom';

const DeleteCourse = () => {
    const { data, authenticatedUser } = useContext(Context);
    const { id } = useParams();
    let history = useHistory();

    useEffect(() => {
        const course = data.getCourse(id);
        console.log(authenticatedUser);
        console.log(course);
        data.deleteCourse(course, authenticatedUser.emailAddress, authenticatedUser.password);
        history.push('/');
    });
    
    // return (
    //     history.push("/");
    // );
};

export default DeleteCourse;
