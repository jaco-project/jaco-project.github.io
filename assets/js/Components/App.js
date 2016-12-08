"use strict";
const React = require("react");
const ReactRedux = require("react-redux");
const Converter_1 = require("./Converter");
const Store_1 = require("../Store");
class App extends React.Component {
    render() {
        return React.createElement(ReactRedux.Provider, { store: Store_1.default },
            React.createElement("div", { "data-component": "App" },
                React.createElement(Converter_1.default, null)));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
