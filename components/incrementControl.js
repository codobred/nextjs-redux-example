import React from 'react';
import {connect} from "react-redux";

import {incrementCounter} from "../pages/store/actions";

export const IncrementControl = ({incrementCounter}) => {
	return (<button type='button' onClick={() => incrementCounter()}>increment</button>)
};

export default connect(() => ({}), {
	incrementCounter
})(IncrementControl);
