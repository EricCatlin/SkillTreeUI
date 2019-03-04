import React from 'react';
import { connect } from 'react-redux';

// User component
const User = ({ goHome, userId }) => (
  <div>
    <p>{`User component: user ${userId}`}</p>
    <button type="button" onClick={() => goHome()}>
      Back
    </button>
  </div>
);

const ConnectedUser = connect(
  ({ location: { params } }) => ({ userId: params.id }),
  dispatch => ({ goHome: () => dispatch({ type: 'HOME' }) })
)(User);

export { ConnectedUser as User };
