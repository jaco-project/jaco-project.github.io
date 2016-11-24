import * as React from 'react';
import Converter from './Converter';

interface IAppProp {
}

interface IAppState {
}

export default class App extends React.Component<IAppProp, IAppState> {

	public render (): JSX.Element {
		return <div data-component="App">
			<Converter />
		</div>;
	}

}
