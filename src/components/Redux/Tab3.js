import React, { Component } from 'react';
import { connect } from 'react-redux';

class Tab3 extends Component {
  render() {
    const { users } = this.props;

    if (users.length === 0) {
      return <div>No players in the list!</div>;
    }

    return (
      <div>
        {users.map((user, index) => (
          <div key={index}>{user}</div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // state => GLOBAL STATE
  // we want players from our state
  // then we assign to users
  return { users: state.players };
};

export default connect(mapStateToProps)(Tab3);
