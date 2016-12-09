"use strict";
const React = require("react");
const ReactDOM = require("react-dom");
const ReactRedux = require("react-redux");
const Action = require("../Action");
class ConverterOptionList extends React.Component {
    render() {
        return React.createElement("div", { "data-component": "ConverterOptionList", onChange: this._onChange.bind(this) },
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("label", null,
                        React.createElement("input", { type: "checkbox", ref: "hiragana", checked: this.props.options.hiragana }),
                        React.createElement("span", null, "h"))),
                React.createElement("li", null,
                    React.createElement("label", null,
                        React.createElement("input", { type: "checkbox", ref: "katakana", checked: this.props.options.katakana }),
                        React.createElement("span", null, "k")))));
    }
    _onChange(e) {
        const hiragana = ReactDOM.findDOMNode(this.refs['hiragana']).checked;
        const katakana = ReactDOM.findDOMNode(this.refs['katakana']).checked;
        if (this.props.dispatch) {
            this.props.dispatch(Action.changeOption({ hiragana, katakana }));
        }
    }
}
function connecter(state) {
    return {
        options: state.action.options,
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ReactRedux.connect(connecter)(ConverterOptionList);
