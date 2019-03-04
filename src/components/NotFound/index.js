import React from 'react';
import { connect } from 'react-redux';

// 404 component
const NotFound = ({ pathname }) => (
  <div>
    <h3>404</h3>
    Page not found: <code>{pathname}</code>
  </div>
);
const ConnectedNotFound = connect(({ location: { pathname } }) => ({
  pathname
}))(NotFound);

export { ConnectedNotFound as NotFound };
