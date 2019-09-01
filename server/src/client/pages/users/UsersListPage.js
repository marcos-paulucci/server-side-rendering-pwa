import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions';
import { PeopleList } from '../../components';

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <PeopleList title="Here's a big list of users" people={this.props.users} />
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  return store.dispatch(fetchUsers());
}

export default {
  loadData,
  component: connect(
    mapStateToProps,
    { fetchUsers }
  )(UsersList)
};
