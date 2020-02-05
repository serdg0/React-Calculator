import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
    const result = props.result;
    return <h1>{result}</h1>;
}

Display.propTypes = {
    result: PropTypes.string
};

Display.defaultProps = {
    result: "0"
};

export default Display;