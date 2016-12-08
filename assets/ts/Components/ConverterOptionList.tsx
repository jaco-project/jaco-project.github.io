import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';

import * as Action from '../Action';

interface IConverterOptionListProp {
	dispatch?: Redux.Dispatch<Action.IState>;
}

interface IConverterOptionListState {
}

class ConverterOptionList extends React.Component<IConverterOptionListProp, IConverterOptionListState> {

	public render (): JSX.Element {
		return <div data-component="ConverterOptionList" onChange={this._onChange.bind(this)}>
			<ul>
				<li><label><input type="checkbox" ref="hiragana" /><span>ひらがな</span></label></li>
				<li><label><input type="checkbox" ref="katakana" /><span>カタカナ</span></label></li>
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

export default ReactRedux.connect()(ConverterOptionList);
