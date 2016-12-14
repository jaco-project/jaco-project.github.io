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
exports.initialState = {
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
function convert(text) {
    return {
        type: 0 /* CONVERT */,
        inputText: text,
    };
}
exports.convert = convert;
function changeOption(optionsList, optionsState) {
    return {
        type: 1 /* CHANGE_OPTION */,
        options: optionsList,
        optionsState,
    };
}
exports.changeOption = changeOption;
