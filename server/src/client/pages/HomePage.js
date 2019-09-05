import React from 'react';
import { Flexview, Text } from '../components';

const Home = () => {
  return (
    <Flexview bg="neutral-8" flex="column" alignItems="center" justifyContent="around">
      <h3>Welcome</h3>
      <p>Check out these awesome features</p>
    </Flexview>
  );
};

export default {
  component: Home
};
