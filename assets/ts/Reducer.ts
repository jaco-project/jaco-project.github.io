import Jaco from 'jaco';

import * as Action from './Action';

export interface IRecuderState {
	action: Action.IState;
}

export function reduceAction (state: Action.IState = Action.initialState, action: Action.IAction): Action.IState {
	switch (action.type) {
		case Action.types.CONVERT:
		case Action.types.CHANGE_OPTION:
			const inputText = action.inputText || state.inputText;
			const options = action.options || state.options;
			const optionsState = action.optionsState || state.optionsState;
			let outputText = new Jaco(inputText);
			if (action.optionsState) {
				for (const method of options) {
					if (action.optionsState[method] && outputText[method]) {
						outputText = outputText[method]();
					}
				}
			}
			return {
				inputText,
				outputText: outputText.toString(),
				options,
				optionsState,
			};
		default: {
			return state;
		}
	}
}

