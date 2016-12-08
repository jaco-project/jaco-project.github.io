import * as React from 'react';
import * as ReactRedux from 'react-redux';

import * as Reducer from '../Reducer';

import ConverterInputArea from './ConverterInputArea';
import ConverterOptionList from './ConverterOptionList';
import ConverterOutputArea from './ConverterOutputArea';

interface IConverterProp {
	outputText: string;
}

interface IConverterState {
}

class Converter extends React.Component<IConverterProp, IConverterState> {

	public render (): JSX.Element {
		return <div data-component="Converter">
			<ConverterInputArea />
			<ConverterOptionList />
			<ConverterOutputArea value={this.props.outputText} />
		</div>;
	}

}

function connecter (state: Reducer.IState): IConverterProp {
	console.log('Component<Converter> connecter', state.action.inputText);
	return {
		outputText: state.action.inputText || '',
	};
}

export default ReactRedux.connect(connecter)(Converter);
