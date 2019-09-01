import React, { Component } from 'react';
import { Box, Text } from '../../components';

class PeopleList extends Component {
  renderPeople() {
    return this.props.people.map(person => {
      return (
        <Box
          flex="row"
          key={person.id}
          justifyContent="around"
          alignItems="center"
          ba
          bc="neutral-30"
          style={{ width: '100%', flex: 1 }}
        >
          <Box>{person.name}</Box>
        </Box>
      );
    });
  }

  render() {
    return (
      <Box style={{ height: '80%' }} bg="neutral-8" pa={4}>
        <Box textAlign="center" mv={6} style={{ fontSize: '2rem' }}>
          {this.props.title}
        </Box>
        <Box style={{ height: '100%' }} flex="column" alignItems="center" justifyContent="between">
          {this.renderPeople()}
        </Box>
      </Box>
    );
  }
}
export default PeopleList;
