import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './Components/Header';
import Courses from './Components/Courses';
import UserSignIn from './Components/UserSignIn';
import UserSignUp from './Components/UserSignUp';
import UserSignOut from './Components/UserSignOut';
// import CourseDetail from './Components/CourseDetail';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={Courses} />
                {/*
                // TODO - build components for these routes (instruction step 5) 
                <Route path="/courses/create" component={CreateCourse} />
                <Route path="/courses/:id/update" component={UpdateCourse} />
                <Route path="/courses/:id" component={CourseDetail} /> 
                */}
                <Route path="/signin" component={UserSignIn} />
                <Route path="/signup" component={UserSignUp} />
                <Route path="/signout" component={UserSignOut} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
