import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const name = props.buttonName;// eslint-disable-line
  return <button type="button">{name}</button>;
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
