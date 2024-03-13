// ProtectedRoute.jsx
import {useContext, AuthContext} from 'react';
import PropTypes from 'prop-types';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return <Route {...rest}>{children}</Route>;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default ProtectedRoute;
