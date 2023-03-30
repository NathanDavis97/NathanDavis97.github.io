import React from "react";

const Header = ({ header, copy, subtext }) => {
  return (
    <div>
      {header}
      <span>{copy}</span>
      <span>{subtext}</span>
    </div>
  );
};

export default Header;
