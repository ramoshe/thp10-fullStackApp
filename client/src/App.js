import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import Courses from './Components/Courses';
import UserSignIn from './Components/UserSignIn';
import UserSignUp from './Components/UserSignUp';
import UserSignOut from './Components/UserSignOut';
import CourseDetail from './Components/CourseDetail';
import CreateCourse from './Components/CreateCourse';
import UpdateCourse from './Components/UpdateCourse';
import DeleteCourse from './Components/DeleteCourse';

function App() {
    return (
        <BrowserRouter forceRefresh={true}>
            <Header />
            <Switch>
                <Route exact path="/" component={Courses} />
                <Route path="/courses/create" component={CreateCourse} />
                <Route path="/courses/:id/update" component={UpdateCourse} />
                <Route path="/courses/:id/delete" component={DeleteCourse} />
                <Route path="/courses/:id" component={CourseDetail} /> 
                <Route path="/signin" component={UserSignIn} />
                <Route path="/signup" component={UserSignUp} />
                <Route path="/signout" component={UserSignOut} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
