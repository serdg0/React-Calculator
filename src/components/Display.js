import React from 'react';
import PropTypes from 'prop-types';

const displayStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'flex-end',
  background: '#848593',
  height: 100,
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'right',
  padding: 4,
};

const Display = props => {
  const { result } = props;
  return <div style={displayStyle}><h1>{result}</h1></div>;
};

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
