"use strict";
const React = require("react");
const ReactDOM = require("react-dom");
const ReactRedux = require("react-redux");
const Action = require("../Action");
function createOptionItem(name, options, optionsState) {
    return React.createElement("li", null,
        React.createElement("label", null,
            React.createElement("input", { type: "checkbox", ref: name, checked: optionsState[name] }),
            React.createElement("span", null, options[name].name)));
}
class ConverterOptionList extends React.Component {
    render() {
        return React.createElement("div", { "data-component": "ConverterOptionList", onChange: this._onChange.bind(this) },
            React.createElement("ul", null, this.props.options.map(name => createOptionItem(name, Action.options, this.props.optionsState))));
    }
    _onChange(e) {
        const checkedState = {};
        for (const name of this.props.options) {
            const ref = ReactDOM.findDOMNode(this.refs[name]);
            checkedState[name] = ref.checked;
        }
        if (this.props.dispatch) {
            this.props.dispatch(Action.changeOption(this.props.options, checkedState));
        }
    }
}
function connecter(state) {
    return {
        options: state.action.options,
        optionsState: state.action.optionsState,
    };
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ReactRedux.connect(connecter)(ConverterOptionList);
