import React from "react";

const Header = ({ header, copy }) => {
  return (
    <div>
      {header}
      <span>{copy}</span>
    </div>
  );
};

export default Header;
