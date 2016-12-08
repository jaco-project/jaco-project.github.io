import * as React from 'react';
import * as ReactRedux from 'react-redux';

import Converter from './Converter';

import store from '../Store';

interface IAppProp {
}

interface IAppState {
}

export default class App extends React.Component<IAppProp, IAppState> {

	public render (): JSX.Element {
		return <ReactRedux.Provider store={ store }>
			<div data-component="App">
				<Converter />
			</div>
		</ReactRedux.Provider>;
	}

}
