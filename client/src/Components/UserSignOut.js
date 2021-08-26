import { useHistory } from 'react-router-dom';

const UserSignOut = () => {

    let history = useHistory();

    // TODO - add code that resets (signs out) the authenticatedUser

    history.push('/');
    return null;
};

export default UserSignOut;
