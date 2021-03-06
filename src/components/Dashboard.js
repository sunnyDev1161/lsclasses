import React from 'react';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Header from './header/header';
import SideDrawer from './Drawer';
import Home from './Home';
import Calendar from './Calendar';
import Classes from './Classes';
import Courses from './Courses';
import Archives from './Archives';
import Students from './Students';
import Profile from './Profile';
import Files from './Files';

const useStyles = makeStyles(theme => ({
  dashboard: {
    width: 'calc(100% - 240px)',
    height: '100%',
    float: 'right',
    padding: '20px',
    paddingBottom: '140px',
    overflowY: 'auto'
  },
  main: {
    position: 'fixed',
    top: '19%',
    width: '100%',
    height: '100%',
    marginBottom: '50px'
  }
}));
const routes = [
  {
    _Component: Home,
    path: '/home',
    exact: true
  },
  {
    _Component: Calendar,
    path: '/calendar',
    exact: true
  },
  {
    _Component: Classes,
    path: '/classes',
    exact: true
  },
  {
    _Component: Courses,
    path: '/courses',
    exact: true
  },
  {
    _Component: Archives,
    path: '/archives',
    exact: true
  },
  {
    _Component: Students,
    path: '/students',
    exact: true
  },
  {
    _Component: Profile,
    path: '/profile',
    exact: true
  },
  {
    _Component: Files,
    path: '/files',
    exact: true
  }
];
const Routes = props => {
  return (
    <>
      {routes.map(Component => {
        return (
          <Route
            path={Component.path}
            exact={Component.exact}
            render={e => <Component._Component {...props} />}
          />
        );
      })}
    </>
  );
};
const Dashboard = props => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.main}>
        {' '}
        <SideDrawer />
        <div className={classes.dashboard}>
          <Routes />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
