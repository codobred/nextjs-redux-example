import React from 'react';
import {connect} from "react-redux";

export const CounterView = (props) => {
	console.log('[Received props]', props);
	return <div>
		<b>counter</b>: {props.counter.count}
	</div>
};

export default connect((state) => state)(CounterView);
