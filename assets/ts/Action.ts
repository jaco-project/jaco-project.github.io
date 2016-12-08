import Jaco from 'jaco';

export interface IState {
	inputText?: string;
	options?: IOptions;
}

export interface IOptions {
	hiragana?: boolean;
	katakana?: boolean;
}

export interface IAction {
	type: types;
	convertedText?: string;
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
		convertedText: new Jaco(text).toKatakana().toString(),
	};
}

export function changeOption (options: IOptions): IAction {
	return {
		type: types.CONVERT,
		options,
	};
}
