import React from 'react';
import App from './App';
import HomePage from './pages/HomePage';
import UsersListPage from './pages/users/UsersListPage';
import NotFoundPage from './pages/NotFoundPage';
import AdminsListPage from './pages/admins/AdminsListPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...AdminsListPage,
        path: '/admins'
      },
      {
        ...UsersListPage,
        path: '/users'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
