import React from 'react';
import { connect } from 'react-redux';

// Home component
const Home = ({ visitUser }) => {
  const rndUserId = Math.floor(20 * Math.random());
  return (
    <div>
      <p>Welcome home!</p>
      <button type="button" onClick={() => visitUser(rndUserId)}>
        {`Visit user ${rndUserId}`}
      </button>
    </div>
  );
};

const ConnectedHome = connect(
  null,
  dispatch => ({
    visitUser: userId => dispatch({ type: 'USER', params: { id: userId } })
  })
)(Home);

export { ConnectedHome as Home };
