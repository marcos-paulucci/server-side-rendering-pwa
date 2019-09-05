import React, { Component } from 'react';
import { Flexview, Text } from '../../components';

class PeopleList extends Component {
  renderPeople() {
    return this.props.people.map(person => {
      return (
        <Flexview
          flex="row"
          key={person.id}
          justifyContent="around"
          alignItems="center"
          ba
          bc="neutral-30"
          style={{ width: '100%', flex: 1 }}
        >
          <Flexview>{person.name}</Flexview>
        </Flexview>
      );
    });
  }

  render() {
    return (
      <Flexview style={{ height: '80%' }} pa={4}>
        <Flexview textAlign="center" mv={6} style={{ fontSize: '2rem' }}>
          {this.props.title}
        </Flexview>
        <Flexview
          style={{ height: '100%' }}
          flex="column"
          alignItems="center"
          justifyContent="between"
        >
          {this.renderPeople()}
        </Flexview>
      </Flexview>
    );
  }
}
export default PeopleList;
