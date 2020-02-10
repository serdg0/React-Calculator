import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const {
    color, wide, clickHandler, buttonName,
  } = props;
  const btnStyle = {
    width: '25%',
    height: '100%',
    alignText: 'center',
    color: 'black',
    border: '1px d1d1d1',
    fontWeight: 'bold',
    background: color,
  };
  if (wide) {
    btnStyle.width = '50%';
  }
  return <button onClick={() => clickHandler(buttonName)} style={btnStyle} type="button">{buttonName}</button>;
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
