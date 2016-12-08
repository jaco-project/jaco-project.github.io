import * as Action from './Action';

const initialState: Action.IState = {
	inputText: '',
};

export interface IState {
	action: Action.IState;
}

export function action (state: Action.IState = initialState, action: Action.IAction): Action.IState {
	switch (action.type) {
		case Action.types.CONVERT:
			console.log(state.options);
			return {
				inputText: action.convertedText || '',
			};
		case Action.types.CHANGE_OPTION:
			return {
				options: action.options || {},
			};
		default: {
			return state;
		}
	}
}

