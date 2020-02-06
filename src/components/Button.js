import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const btnStyle = {
    width: '25%',
    height: '100%',
    alignText: 'center',
    color: 'black',
    border: '1px d1d1d1',
    background: props.color,
  };
  const { buttonName } = props;
  if (props.wide) {
    btnStyle.width = '50%';
  }
  return <button style={btnStyle} type="button">{buttonName}</button>;
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

export default Button;
