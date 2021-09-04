import { useContext, useState, useEffect } from 'react';
import { Context } from '../Context';
import { useParams, Redirect } from 'react-router-dom';

const DeleteCourse = () => {
    const { data, authenticatedUser } = useContext(Context);
    const { id } = useParams();
    const [ course, setCourse ] = useState([]);

    useEffect(() => {
        data.getCourse(id)
            .then(course => setCourse(course));
    }, [ data, id ]);

    if (course === null) {
        return <Redirect to="/notfound" />
    } else if (authenticatedUser.id !== course.userId) {
        return <Redirect to="/forbidden" />
    } else {
        data.deleteCourse(id, authenticatedUser.emailAddress, authenticatedUser.password);
        return (
            <Redirect to="/" />
        );
    }
};

export default DeleteCourse;
