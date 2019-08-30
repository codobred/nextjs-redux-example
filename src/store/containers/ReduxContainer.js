import {Provider} from "react-redux";
import withRedux from "next-redux-wrapper";

import configureStore from "../createStore";

const Container = ({store, children}) => {
	return (
		<Provider store={store}>
			{children}
		</Provider>
	)
};

export const ReduxContainer = withRedux(configureStore)(Container);
