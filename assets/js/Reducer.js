"use strict";
const toHiragana_1 = require("jaco/lib/fn/toHiragana");
const toKatakana_1 = require("jaco/lib/fn/toKatakana");
const Action = require("./Action");
const initialState = {
    inputText: '',
    outputText: '',
    options: {},
};
function reduceAction(state = initialState, action) {
    switch (action.type) {
        case Action.types.CONVERT:
        case Action.types.CHANGE_OPTION:
            const inputText = action.inputText || state.inputText;
            const options = action.options || state.options;
            let outputText = inputText;
            if (options.hiragana) {
                outputText = toHiragana_1.default(outputText);
            }
            if (options.katakana) {
                outputText = toKatakana_1.default(outputText);
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
exports.reduceAction = reduceAction;
