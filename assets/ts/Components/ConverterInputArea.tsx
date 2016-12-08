import * as React from 'react';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';

import * as Action from '../Action';

interface IConverterInputAreaProp {
	dispatch?: Redux.Dispatch<Action.IState>;
}

interface IConverterInputAreaState {
}

class ConverterInputArea extends React.Component<IConverterInputAreaProp, IConverterInputAreaState> {

	public render (): JSX.Element {
		return <div data-component="ConverterInputArea">
			<textarea onChange={this._onChange.bind(this)}></textarea>
		</div>;
	}

	private _onChange (e: React.FormEvent<HTMLTextAreaElement>) {
		if (this.props.dispatch) {
			this.props.dispatch(Action.convert(e.currentTarget.value));
		}
	}

}

export default ReactRedux.connect()(ConverterInputArea);
