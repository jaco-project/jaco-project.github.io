"use strict";
exports.options = {
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
function convert(text) {
    return {
        type: 0 /* CONVERT */,
        inputText: text,
    };
}
exports.convert = convert;
function changeOption(options) {
    return {
        type: 1 /* CHANGE_OPTION */,
        options,
    };
}
exports.changeOption = changeOption;
