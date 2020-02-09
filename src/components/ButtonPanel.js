import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

const rowStyle = {
  height: 100,
};

const panelStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const ButtonPanel = (props) => {
  const { clickHandler } = props;
  return (
  <div style={panelStyle}>
    <div style={rowStyle}>
      <Button buttonName="AC" clickHandler={clickHandler} color="#e0e0e0" />
      <Button buttonName="+/-" clickHandler={clickHandler} color="#e0e0e0" />
      <Button buttonName="%" clickHandler={clickHandler} color="#e0e0e0" />
      <Button buttonName="÷" clickHandler={clickHandler} />
    </div>
    <div style={rowStyle}>
      <Button buttonName="7" clickHandler={clickHandler} color="#e0e0e0" />
      <Button buttonName="8" clickHandler={clickHandler} color="#e0e0e0" />
      <Button buttonName="9" clickHandler={clickHandler} color="#e0e0e0" />
      <Button buttonName="X" clickHandler={clickHandler} />
    </div>
    <div style={rowStyle}>
      <Button buttonName="4" clickHandler={clickHandler} color="#e0e0e0" />
      <Button buttonName="5" clickHandler={clickHandler} color="#e0e0e0" />
      <Button buttonName="6" clickHandler={clickHandler} color="#e0e0e0" />
      <Button buttonName="-" clickHandler={clickHandler} />
    </div>
    <div style={rowStyle}>
      <Button buttonName="1" clickHandler={clickHandler} color="#e0e0e0" />
      <Button buttonName="2" clickHandler={clickHandler} color="#e0e0e0" />
      <Button buttonName="3" clickHandler={clickHandler} color="#e0e0e0" />
      <Button buttonName="+" clickHandler={clickHandler} />
    </div>
    <div style={rowStyle}>
      <Button buttonName="0" clickHandler={clickHandler} wide color="#e0e0e0" />
      <Button buttonName="." clickHandler={clickHandler} color="#e0e0e0" />
      <Button buttonName="=" clickHandler={clickHandler} />
    </div>
  </div>
  )
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired
}

export default ButtonPanel;
