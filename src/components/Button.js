import React from 'react';
import PropTypes from 'prop-types';

const btnStyle = {
    width: '25%',
    alignText: 'center',
    color: 'black',
    border: '2px grey'
}

const Button = props => {
  const name = props.buttonName;// eslint-disable-line
  return <button style={btnStyle} type="button">{name}</button>;
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
