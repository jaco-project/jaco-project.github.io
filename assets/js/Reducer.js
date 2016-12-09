"use strict";
const toHiragana_1 = require("jaco/lib/fn/toHiragana");
const toKatakana_1 = require("jaco/lib/fn/toKatakana");
const Action = require("./Action");
const initialState = {
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
function reduceAction(state = initialState, action) {
    switch (action.type) {
        case 0 /* CONVERT */:
        case 1 /* CHANGE_OPTION */:
            const inputText = action.inputText || state.inputText;
            const options = action.options || state.options;
            let outputText = inputText;
            for (const method of options) {
            }
            if (options.toHiragana.enabled) {
                outputText = toHiragana_1.default(outputText);
            }
            if (options.toKatakana.enabled) {
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
