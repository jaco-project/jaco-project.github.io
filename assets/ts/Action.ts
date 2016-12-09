export interface IState {
	inputText: string;
	outputText: string;
	options: IOptionList;
	optionsState: IOptionsState;
}

export type IOptionsState = {
	[ N in keyof IOptions ]: boolean;
};

export interface IOption {
	name: string;
	description?: string;
}

export interface IOptions {
	addSemivoicedMarks: IOption;
	addVoicedMarks: IOption;
	combinateSoundMarks: IOption;
	convertIterationMarks: IOption;
	convertProlongedSoundMarks: IOption;
	removeUnpairedSurrogate: IOption;
	removeVoicedMarks: IOption;
	trim: IOption;
	toBasicLetter: IOption;
	toHiragana: IOption;
	toKatakana: IOption;
	toNarrow: IOption;
	toNarrowAlphanumeric: IOption;
	toNarrowJapanese: IOption;
	toNarrowKatakana: IOption;
	toNarrowSign: IOption;
	toNarrowSymbolForJapanese: IOption;
	toNumeric: IOption;
	toPhoeticKana: IOption;
	toWide: IOption;
	toWideAlphanumeric: IOption;
	toWideJapanese: IOption;
	toWideKatakana: IOption;
	toWideSign: IOption;
	toWideSymbolForJapanese: IOption;
}

export type IOptionList = (keyof IOptions)[];

export interface IAction {
	type: types;
	inputText?: string;
	options?: IOptionList;
}

export const enum types {
	CONVERT,
	CHANGE_OPTION,
}

export const options: IOptions = {
	addSemivoicedMarks: {
		name: '',
		description: '',
	},
	addVoicedMarks: {
		name: '',
		description: '',
	},
	combinateSoundMarks: {
		name: '',
		description: '',
	},
	convertIterationMarks: {
		name: '',
		description: '',
	},
	convertProlongedSoundMarks: {
		name: '',
		description: '',
	},
	removeUnpairedSurrogate: {
		name: '',
		description: '',
	},
	removeVoicedMarks: {
		name: '',
		description: '',
	},
	trim: {
		name: '',
		description: '',
	},
	toBasicLetter: {
		name: '',
		description: '',
	},
	toHiragana: {
		name: '',
		description: '',
	},
	toKatakana: {
		name: '',
		description: '',
	},
	toNarrow: {
		name: '',
		description: '',
	},
	toNarrowAlphanumeric: {
		name: '',
		description: '',
	},
	toNarrowJapanese: {
		name: '',
		description: '',
	},
	toNarrowKatakana: {
		name: '',
		description: '',
	},
	toNarrowSign: {
		name: '',
		description: '',
	},
	toNarrowSymbolForJapanese: {
		name: '',
		description: '',
	},
	toNumeric: {
		name: '',
		description: '',
	},
	toPhoeticKana: {
		name: '',
		description: '',
	},
	toWide: {
		name: '',
		description: '',
	},
	toWideAlphanumeric: {
		name: '',
		description: '',
	},
	toWideJapanese: {
		name: '',
		description: '',
	},
	toWideKatakana: {
		name: '',
		description: '',
	},
	toWideSign: {
		name: '',
		description: '',
	},
	toWideSymbolForJapanese: {
		name: '',
		description: '',
	},
};

export function convert (text: string): IAction {
	return {
		type: types.CONVERT,
		inputText: text,
	};
}

export function changeOption (options: IOptionList): IAction {
	return {
		type: types.CHANGE_OPTION,
		options,
	};
}
