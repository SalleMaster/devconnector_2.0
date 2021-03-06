import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import PrivateRoute from '../routing/PrivateRoute';
import CreateProfile from '../profile-form/CreateProfile';
import EditProfile from '../profile-form/EditProfile';
import AddExperience from '../profile-form/AddExperience';
import AddEducation from '../profile-form/AddEducation';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import Posts from '../posts/Posts';
import Post from '../post/Post';
import NotFound from '../layout/NotFound';

const Routes = () => {
  return (
    <section className='container'>
      <Alert />
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/profiles' component={Profiles} />
        <Route exact path='/profile/:id' component={Profile} />
        <PrivateRoute Route exact path='/dashboard' component={Dashboard} />
        <PrivateRoute
          Route
          exact
          path='/create-profile'
          component={CreateProfile}
        />
        <PrivateRoute
          Route
          exact
          path='/edit-profile'
          component={EditProfile}
        />
        <PrivateRoute
          Route
          exact
          path='/add-experience'
          component={AddExperience}
        />
        <PrivateRoute
          Route
          exact
          path='/add-education'
          component={AddEducation}
        />
        <PrivateRoute Route exact path='/posts/:id' component={Post} />
        <PrivateRoute Route exact path='/posts' component={Posts} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
