import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Box, Text } from '../index';

const Navbar = ({}) => {
  return (
    <Box bg="primary-40" bb bc="neutral-30" className="myssr-n-navbar__wrapper">
      <div className="myssr-n-navbar--desktop">
        <Box flex="row" justifyContent="around" alignItems="center">
          <Box
            className="myssr-n-navbar_item"
            brad={3}
            textAlign="center"
            mdCol={4}
            pv={4}
            bc="white"
            ba
          >
            <Link to="/" style={{ display: 'block', width: '100%' }}>
              React SSR
            </Link>
          </Box>
          <Box
            className="myssr-n-navbar_item"
            brad={3}
            textAlign="center"
            mdCol={4}
            pv={4}
            bc="white"
            ba
          >
            <Link to="/users" style={{ display: 'block', width: '100%' }}>
              Users
            </Link>
          </Box>
          <Box
            className="myssr-n-navbar_item"
            brad={3}
            textAlign="center"
            mdCol={4}
            pv={4}
            bc="white"
            ba
          >
            <Link to="/admins" style={{ display: 'block', width: '100%' }}>
              Admins
            </Link>
          </Box>
        </Box>
      </div>
      <Box className="myssr-n-navbar--mobile">
        <Box flex="column" alignItems="center" justifyContent="between">
          <Box
            xsCol={12}
            bc="white"
            pv={6}
            ba
            justifyContent="between"
            textAlign="center"
            alignItems="center"
            className="myssr-n-navbar--mobile_item"
          >
            <Link to="/">React SSR</Link>
          </Box>
          <Box
            xsCol={12}
            bc="white"
            ba
            pv={6}
            justifyContent="between"
            alignItems="center"
            textAlign="center"
            className="myssr-n-navbar--mobile_item"
          >
            <Link to="/users">Users</Link>
          </Box>
          <Box
            xsCol={12}
            bc="white"
            ba
            pv={6}
            justifyContent="between"
            alignItems="center"
            textAlign="center"
            className="myssr-n-navbar--mobile_item"
          >
            <Link to="/admins">Admins</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

function mapStateToProps({}) {
  return {};
}

export default connect(mapStateToProps)(Navbar);
