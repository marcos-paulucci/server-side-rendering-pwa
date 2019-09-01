import React from 'react';
import { renderRoutes } from 'react-router-config';
import Navbar from './components/nav-bar/nav-bar';
import "./styles/theme.scss";

const App = ({ route }) => {
  return (
    <div>
      <Navbar />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
  loadData: null
};
