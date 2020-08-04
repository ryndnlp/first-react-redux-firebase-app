import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/project/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/project/CreateProject';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path='/' component={Dashboard} exact></Route>
                    <Route path='/project/:id' component={ProjectDetails}></Route>
                    <Route path='/signin' component={SignIn}></Route>
                    <Route path='/signup' component={SignUp}></Route>
                    <Route path='/create' component={CreateProject}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
