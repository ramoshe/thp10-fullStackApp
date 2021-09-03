import { useContext, useEffect } from 'react';
import { Context } from '../Context';
import { useParams, Redirect } from 'react-router-dom';

const DeleteCourse = () => {
    const { data, authenticatedUser } = useContext(Context);
    const { id } = useParams();

    useEffect(() => {
        data.deleteCourse(id, authenticatedUser.emailAddress, authenticatedUser.password);
    });
    
    return (
        <Redirect to="/" />
    );
};

export default DeleteCourse;
