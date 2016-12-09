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
				<li><label><input type="checkbox" ref="toHiragana" checked={ this.props.options.toHiragana!.enabled } /><span>{ this.props.options.toHiragana!.name }</span></label></li>
				<li><label><input type="checkbox" ref="toKatakana" checked={ this.props.options.toKatakana!.enabled } /><span>{ this.props.options.toKatakana!.name }</span></label></li>
			</ul>
		</div>;
	}

	private _onChange (e: React.FormEvent<HTMLTextAreaElement>) {
		const toHiragana = (ReactDOM.findDOMNode(this.refs['toHiragana']) as HTMLInputElement).checked;
		const toKatakana = (ReactDOM.findDOMNode(this.refs['toKatakana']) as HTMLInputElement).checked;
		// if (this.props.dispatch) {
		// 	this.props.dispatch(Action.changeOption({
		// 		toHiragana: {
		// 			name: 'ひらがな',
		// 			enabled: toHiragana,
		// 		},
		// 		toKatakana: {
		// 			name: 'カタカナ',
		// 			enabled: toKatakana,
		// 		}
		// 	}));
		// }
	}

}

function connecter (state: Reducer.IRecuderState): IConverterOptionListProp {
	return {
		options: state.action.options,
	};
}

export default ReactRedux.connect(connecter)(ConverterOptionList);
