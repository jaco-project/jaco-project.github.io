"use strict";
const React = require("react");
const ReactRedux = require("react-redux");
const Action = require("../Action");
class ConverterInputArea extends React.Component {
    render() {
        return React.createElement("div", { "data-component": "ConverterInputArea" },
            React.createElement("textarea", { onChange: this._onChange.bind(this) }));
    }
    _onChange(e) {
        if (this.props.dispatch) {
            this.props.dispatch(Action.convert(e.currentTarget.value));
        }
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ReactRedux.connect()(ConverterInputArea);
