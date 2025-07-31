"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugBase = exports.urlBase = void 0;
const yup_1 = require("yup");
exports.urlBase = (0, yup_1.object)().shape({
    url: (0, yup_1.string)().required("Url é necessária").url("O formato deve ser uma url"),
});
exports.slugBase = (0, yup_1.object)().shape({
    slug: (0, yup_1.string)().required(),
});
