"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
const errorMessages_1 = require("../utils/errorMessages");
const isString = ramda_1.is(String);
const isArrayOfStrings = (test) => Array.isArray(test)
    ? !test.map(isString).includes(false)
    : false;
exports.isAnArrayOfStrings = (pathToValue) => (req, res, next) => isArrayOfStrings(ramda_1.path(pathToValue, req.body))
    ? next()
    : res.status(400).json(errorMessages_1.isNotAnArrayOfStrings(pathToValue));
//# sourceMappingURL=validateBody.js.map