import {ReduxContainer} from './store/containers/ReduxContainer'
import CounterView from '../components/counterView';
import IncrementControl from "../components/incrementControl";
import DecrementControl from "../components/decrementControl";

export default () => (
	<div className={'layout'}>
		<ReduxContainer>
			<CounterView/>

			<IncrementControl/>
			<DecrementControl/>
		</ReduxContainer>
	</div>
);
