"use strict";
const React = require("react");
const ReactDOM = require("react-dom");
const ReactRedux = require("react-redux");
class ConverterOptionList extends React.Component {
    render() {
        return React.createElement("div", { "data-component": "ConverterOptionList", onChange: this._onChange.bind(this) },
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("label", null,
                        React.createElement("input", { type: "checkbox", ref: "toHiragana", checked: this.props.options.toHiragana.enabled }),
                        React.createElement("span", null, this.props.options.toHiragana.name))),
                React.createElement("li", null,
                    React.createElement("label", null,
                        React.createElement("input", { type: "checkbox", ref: "toKatakana", checked: this.props.options.toKatakana.enabled }),
                        React.createElement("span", null, this.props.options.toKatakana.name)))));
    }
    _onChange(e) {
        const toHiragana = ReactDOM.findDOMNode(this.refs['toHiragana']).checked;
        const toKatakana = ReactDOM.findDOMNode(this.refs['toKatakana']).checked;
        // if (this.props.dispatch) {
        // 	this.props.dispatch(Action.changeOption({
        // 		toHiragana: {
        // 			name: 'ひらがな',
        // 			enabled: toHiragana,
        // 		},
        // 		toKatakana: {
        // 			name: 'カタカナ',
        // 			enabled: toKatakana,
        // 		}
        // 	}));
        // }
    }
}
function connecter(state) {
    return {
        options: state.action.options,
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ReactRedux.connect(connecter)(ConverterOptionList);
