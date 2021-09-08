/**
 * This component deletes the course ONLY if the user is the owner
 */
import { useContext, useState, useEffect } from 'react';
import { Context } from '../Context';
import { useParams, Redirect } from 'react-router-dom';

const DeleteCourse = () => {

    const { id } = useParams();
    const { data, authenticatedUser } = useContext(Context);
    const [ course, setCourse ] = useState([]);

    useEffect(() => {
        data.getCourse(id)
            .then(course => setCourse(course));
    }, [ data, id ]);

    // If course does not exist redirect to "Not Found"
    if (course === null) {
        return <Redirect to="/notfound" />
    // If user is not owner redirect to "Forbidden"
    } else if (authenticatedUser.id !== course.userId) {
        return <Redirect to="/forbidden" />
    // If course exists and user is owner delete the course and redirect to course list
    } else {
        data.deleteCourse(id, authenticatedUser.emailAddress, authenticatedUser.password);
        return (
            <Redirect to="/" />
        );
    }
};

export default DeleteCourse;
