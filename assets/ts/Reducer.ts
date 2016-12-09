import toHiragana from 'jaco/lib/fn/toHiragana';
import toKatakana from 'jaco/lib/fn/toKatakana';

import * as Action from './Action';

const initialState: Action.IState = {
	inputText: '',
	outputText: '',
	options: [],
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
	}
};

export interface IRecuderState {
	action: Action.IState;
}

export function reduceAction (state: Action.IState = initialState, action: Action.IAction): Action.IState {
	switch (action.type) {
		case Action.types.CONVERT:
		case Action.types.CHANGE_OPTION:
			const inputText = action.inputText || state.inputText;
			const options = action.options || state.options;
			let outputText = inputText;
			for (const method of options) {
				state.optionsState[method] ;

			}
			if (options.toHiragana!.enabled) {
				outputText = toHiragana(outputText);
			}
			if (options.toKatakana!.enabled) {
				outputText = toKatakana(outputText);
			}
			return {
				inputText,
				outputText,
				options,
			};
		default: {
			return state;
		}
	}
}

