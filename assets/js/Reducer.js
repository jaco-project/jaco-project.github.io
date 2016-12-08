"use strict";
const Action = require("./Action");
const initialState = {
    inputText: '',
};
function action(state = initialState, action) {
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
exports.action = action;
