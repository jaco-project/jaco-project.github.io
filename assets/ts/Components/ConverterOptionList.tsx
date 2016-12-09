import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';

import * as Action from '../Action';
import * as Reducer from '../Reducer';

interface IConverterOptionListProp {
	options: Action.IOptionNameList;
	optionsState: Action.IOptionsState;
	dispatch?: Redux.Dispatch<Action.IState>;
}

interface IConverterOptionListState {
}

function createOptionItem (name: Action.IOptionName, options: Action.IOptions, optionsState: Action.IOptionsState) {
	return <li><label><input type="checkbox" ref={ name } checked={ optionsState[name] } /><span>{ options[name].name }</span></label></li>;
}

class ConverterOptionList extends React.Component<IConverterOptionListProp, IConverterOptionListState> {

	public render (): JSX.Element {
		return <div data-component="ConverterOptionList" onChange={ this._onChange.bind(this) }>
			<ul>{ this.props.options.map(name => createOptionItem(name, Action.options, this.props.optionsState)) }</ul>
		</div>;
	}

	private _onChange (e: React.FormEvent<HTMLTextAreaElement>) {
		const checkedState: { [N in keyof Action.IOptionsState]?: boolean } = {};
		for (const name of this.props.options) {
			const ref = ReactDOM.findDOMNode(this.refs[name]) as HTMLInputElement;
			checkedState[name] = ref.checked;
		}
		if (this.props.dispatch) {
			this.props.dispatch(Action.changeOption(this.props.options, checkedState as Action.IOptionsState));
		}
	}

}

function connecter (state: Reducer.IRecuderState): IConverterOptionListProp {
	return {
		options: state.action.options,
		optionsState: state.action.optionsState,
	};
}

export default ReactRedux.connect(connecter)(ConverterOptionList);
