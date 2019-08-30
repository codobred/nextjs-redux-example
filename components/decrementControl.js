import React from 'react';
import {connect} from "react-redux";

import {decrementCounter} from "../pages/store/actions";

export const DecrementControl = ({decrementCounter}) => {
	return (<button type='button' onClick={() => decrementCounter()}>decrement</button>)
};

export default connect(() => ({}), {
	decrementCounter
})(DecrementControl);
