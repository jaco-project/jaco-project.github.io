"use strict";
// tslint:disable-next-line:no-namespace no-mergeable-namespace
var types;
(function (types) {
    types[types["CONVERT"] = 0] = "CONVERT";
    types[types["CHANGE_OPTION"] = 1] = "CHANGE_OPTION";
})(types = exports.types || (exports.types = {}));
function convert(text) {
    return {
        type: types.CONVERT,
        inputText: text,
    };
}
exports.convert = convert;
function changeOption(options) {
    return {
        type: types.CHANGE_OPTION,
        options,
    };
}
exports.changeOption = changeOption;
