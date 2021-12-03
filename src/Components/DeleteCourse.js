/**
 * This component deletes the course ONLY if the user is the owner
 */
import { useContext } from 'react';
import { Context } from '../Context';
import { useParams, Redirect, useLocation } from 'react-router-dom';

const DeleteCourse = () => {

    const { id } = useParams();
    const { data, authenticatedUser, validCourseIDs } = useContext(Context);
    const location = useLocation();
    const { courseUserID } = location.state || 0;

    // If course does not exist redirect to "Not Found"
    if (!validCourseIDs.includes(parseInt(id))) {
        return <Redirect to="/notfound" />
    // If user is not owner redirect to "Forbidden"
    } else if (authenticatedUser.id !== courseUserID) {
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
