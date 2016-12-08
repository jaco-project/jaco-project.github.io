"use strict";
const redux_1 = require("redux");
const Reducer = require("./Reducer");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.createStore(redux_1.combineReducers({
    action: Reducer.action,
}));
