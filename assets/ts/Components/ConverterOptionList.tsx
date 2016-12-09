import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';

import * as Action from '../Action';
import * as Reducer from '../Reducer';

interface IConverterOptionListProp {
	options: Action.IOptions;
	dispatch?: Redux.Dispatch<Action.IState>;
}

interface IConverterOptionListState {
}

class ConverterOptionList extends React.Component<IConverterOptionListProp, IConverterOptionListState> {

	public render (): JSX.Element {
		return <div data-component="ConverterOptionList" onChange={this._onChange.bind(this)}>
			<ul>
				<li><label><input type="checkbox" ref="hiragana" checked={ this.props.options.hiragana } /><span>h</span></label></li>
				<li><label><input type="checkbox" ref="katakana" checked={ this.props.options.katakana } /><span>k</span></label></li>
			</ul>
		</div>;
	}

	private _onChange (e: React.FormEvent<HTMLTextAreaElement>) {
		const hiragana = (ReactDOM.findDOMNode(this.refs['hiragana']) as HTMLInputElement).checked;
		const katakana = (ReactDOM.findDOMNode(this.refs['katakana']) as HTMLInputElement).checked;
		if (this.props.dispatch) {
			this.props.dispatch(Action.changeOption({ hiragana, katakana }));
		}
	}

}

function connecter (state: Reducer.IRecuderState): IConverterOptionListProp {
	return {
		options: state.action.options,
	};
}

export default ReactRedux.connect(connecter)(ConverterOptionList);
