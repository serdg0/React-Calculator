import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const name = props.buttonName;
  return <button>{name}</button>;
};

Button.propTypes = {
  buttonName: PropTypes.string,
};

export default Button;
