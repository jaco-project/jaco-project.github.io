export interface IState {
	inputText: string;
	outputText: string;
	options: IOptionNameList;
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

export type IOptionName = keyof IOptions;

export type IOptionNameList = IOptionName[];

export interface IAction {
	type: types;
	inputText?: string;
	options?: IOptionNameList;
	optionsState?: IOptionsState;
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
		name: 'ひらがなに変換',
		description: '',
	},
	toKatakana: {
		name: 'かたかなに変換',
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

export const initialState: IState = {
	inputText: '',
	outputText: '',
	options: [
		'addSemivoicedMarks',
		'addVoicedMarks',
		'combinateSoundMarks',
		'convertIterationMarks',
		'convertProlongedSoundMarks',
		'removeUnpairedSurrogate',
		'removeVoicedMarks',
		'trim',
		'toBasicLetter',
		'toHiragana',
		'toKatakana',
		'toNarrow',
		'toNarrowAlphanumeric',
		'toNarrowJapanese',
		'toNarrowKatakana',
		'toNarrowSign',
		'toNarrowSymbolForJapanese',
		'toNumeric',
		'toPhoeticKana',
		'toWide',
		'toWideAlphanumeric',
		'toWideJapanese',
		'toWideKatakana',
		'toWideSign',
		'toWideSymbolForJapanese',
	],
	optionsState: {
		addSemivoicedMarks: false,
		addVoicedMarks: false,
		combinateSoundMarks: false,
		convertIterationMarks: false,
		convertProlongedSoundMarks: false,
		removeUnpairedSurrogate: false,
		removeVoicedMarks: false,
		trim: false,
		toBasicLetter: false,
		toHiragana: false,
		toKatakana: false,
		toNarrow: false,
		toNarrowAlphanumeric: false,
		toNarrowJapanese: false,
		toNarrowKatakana: false,
		toNarrowSign: false,
		toNarrowSymbolForJapanese: false,
		toNumeric: false,
		toPhoeticKana: false,
		toWide: false,
		toWideAlphanumeric: false,
		toWideJapanese: false,
		toWideKatakana: false,
		toWideSign: false,
		toWideSymbolForJapanese: false,
	},
};

export function convert (text: string): IAction {
	return {
		type: types.CONVERT,
		inputText: text,
	};
}

export function changeOption (optionsList: IOptionNameList, optionsState: IOptionsState): IAction {
	return {
		type: types.CHANGE_OPTION,
		options: optionsList,
		optionsState,
	};
}
