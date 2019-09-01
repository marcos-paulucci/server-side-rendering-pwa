import React from 'react';
import { Box, Text } from "../components";

const Home = () => {
  return (
    <Box bg="neutral-8" flex="column" alignItems="center" justifyContent="around">
      <h3>Welcome</h3>
      <p>Check out these awesome features</p>
    </Box>
  );
};

export default {
  component: Home
};
