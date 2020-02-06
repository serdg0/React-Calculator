import React from 'react';
import Button from './Button';

const rowStyle = {
  height: 100,
};

const panelStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const ButtonPanel = () => (
  <div style={panelStyle}>
    <div style={rowStyle}>
      <Button buttonName="AC" color="#e0e0e0" />
      <Button buttonName="+/-" color="#e0e0e0" />
      <Button buttonName="%" color="#e0e0e0" />
      <Button buttonName="÷" />
    </div>
    <div style={rowStyle}>
      <Button buttonName="7" color="#e0e0e0" />
      <Button buttonName="8" color="#e0e0e0" />
      <Button buttonName="9" color="#e0e0e0" />
      <Button buttonName="X" />
    </div>
    <div style={rowStyle}>
      <Button buttonName="4" color="#e0e0e0" />
      <Button buttonName="5" color="#e0e0e0" />
      <Button buttonName="6" color="#e0e0e0" />
      <Button buttonName="-" />
    </div>
    <div style={rowStyle}>
      <Button buttonName="1" color="#e0e0e0" />
      <Button buttonName="2" color="#e0e0e0" />
      <Button buttonName="3" color="#e0e0e0" />
      <Button buttonName="+" />
    </div>
    <div style={rowStyle}>
      <Button buttonName="0" wide color="#e0e0e0" />
      <Button buttonName="." color="#e0e0e0" />
      <Button buttonName="=" />
    </div>
  </div>
);

export default ButtonPanel;
