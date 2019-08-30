import {ReduxContainer} from '../src/store/containers/ReduxContainer'
import CounterView from '../src/components/counterView';
import IncrementControl from "../src/components/incrementControl";
import DecrementControl from "../src/components/decrementControl";

export default () => (
	<div className={'layout'}>
		<ReduxContainer>
			<CounterView/>

			<IncrementControl/>
			<DecrementControl/>
		</ReduxContainer>
	</div>
);
