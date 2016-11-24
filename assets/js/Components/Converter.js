"use strict";
const React = require("react");
class Converter extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            text: '',
        };
    }
    render() {
        return React.createElement("div", { "data-component": "Converter" },
            React.createElement("div", { className: "converter-inputarea" },
                React.createElement("textarea", { onChange: this._onChange.bind(this) })),
            React.createElement("div", { className: "converter-outputarea" },
                React.createElement("textarea", { value: this.state.text, readOnly: true })));
    }
    _onChange(e) {
        this.setState({
            text: e.currentTarget.value,
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Converter;
