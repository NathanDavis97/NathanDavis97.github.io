import React from "react";
import PropTypes from "prop-types";

import "./header.css";

export const Header = ({}) => (
  <header>
    <div className="wrapper">
      <div></div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
