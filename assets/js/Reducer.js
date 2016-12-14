"use strict";
const jaco_1 = require("jaco");
const Action = require("./Action");
function reduceAction(state = Action.initialState, action) {
    switch (action.type) {
        case 0 /* CONVERT */:
        case 1 /* CHANGE_OPTION */:
            const inputText = action.inputText || state.inputText;
            const options = action.options || state.options;
            const optionsState = action.optionsState || state.optionsState;
            let outputText = new jaco_1.default(inputText);
            for (const method of options) {
                if (optionsState[method] && outputText[method]) {
                    outputText = outputText[method]();
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
exports.reduceAction = reduceAction;
