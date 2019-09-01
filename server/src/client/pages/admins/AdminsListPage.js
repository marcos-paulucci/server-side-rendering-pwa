import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../../actions';
import { PeopleList } from '../../components';

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  render() {
    return <PeopleList title="List of admins" people={this.props.admins} />;
  }
}

function mapStateToProps({ admins }) {
  return { admins };
}

export default {
  component: connect(
    mapStateToProps,
    { fetchAdmins }
  )(AdminsListPage),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};
