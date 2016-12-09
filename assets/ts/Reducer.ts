import toHiragana from 'jaco/lib/fn/toHiragana';
import toKatakana from 'jaco/lib/fn/toKatakana';

import * as Action from './Action';

const initialState: Action.IState = {
	inputText: '',
	outputText: '',
	options: {},
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
			if (options.hiragana) {
				outputText = toHiragana(outputText);
			}
			if (options.katakana) {
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

