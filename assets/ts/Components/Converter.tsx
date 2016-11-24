import * as React from 'react';

interface IConverterProp {
}

interface IConverterState {
	text: string;
}

export default class Converter extends React.Component<IConverterProp, IConverterState> {

	public state: IConverterState = {
		text: '',
	};

	public render (): JSX.Element {
		return <div data-component="Converter">
			<div className="converter-inputarea">
				<textarea onChange={this._onChange.bind(this)}></textarea>
			</div>
			<div className="converter-outputarea">
				<textarea value={this.state.text} readOnly></textarea>
			</div>
		</div>;
	}

	private _onChange (e: React.FormEvent<HTMLTextAreaElement>) {
		this.setState({
			text: e.currentTarget.value,
		});
	}

}
