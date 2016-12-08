import * as React from 'react';

interface IConverterOutputAreaProp {
	value: string;
}

interface IConverterOutputAreaState {
}

class ConverterOutputArea extends React.Component<IConverterOutputAreaProp, IConverterOutputAreaState> {

	public render (): JSX.Element {
		return <div data-component="ConverterOutputArea">
			<textarea value={this.props.value} readOnly></textarea>
		</div>;
	}

}

export default ConverterOutputArea;
