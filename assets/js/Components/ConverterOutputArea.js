"use strict";
const React = require("react");
class ConverterOutputArea extends React.Component {
    render() {
        return React.createElement("div", { "data-component": "ConverterOutputArea" },
            React.createElement("textarea", { value: this.props.value, readOnly: true }));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ConverterOutputArea;
