"use strict";
const React = require("react");
const ReactRedux = require("react-redux");
const ConverterInputArea_1 = require("./ConverterInputArea");
const ConverterOptionList_1 = require("./ConverterOptionList");
const ConverterOutputArea_1 = require("./ConverterOutputArea");
class Converter extends React.Component {
    render() {
        return React.createElement("div", { "data-component": "Converter" },
            React.createElement(ConverterInputArea_1.default, null),
            React.createElement(ConverterOptionList_1.default, null),
            React.createElement(ConverterOutputArea_1.default, { value: this.props.outputText }));
    }
}
function connecter(state) {
    console.log('Component<Converter> connecter', state.action.inputText);
    return {
        outputText: state.action.inputText || '',
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ReactRedux.connect(connecter)(Converter);
