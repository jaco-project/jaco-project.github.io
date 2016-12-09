
export interface IState {
	inputText: string;
	outputText: string;
	options: IOptions;
}

export interface IOptions {
	hiragana?: boolean;
	katakana?: boolean;
}

export interface IAction {
	type: types;
	inputText?: string;
	options?: IOptions;
}

// tslint:disable-next-line:no-namespace no-mergeable-namespace
export enum types {
	CONVERT,
	CHANGE_OPTION,
}

export function convert (text: string): IAction {
	return {
		type: types.CONVERT,
		inputText: text,
	};
}

export function changeOption (options: IOptions): IAction {
	return {
		type: types.CHANGE_OPTION,
		options,
	};
}
