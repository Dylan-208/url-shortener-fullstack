"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UrlController_1 = __importDefault(require("../UrlController"));
const urlControllerFactory = new UrlController_1.default();
exports.default = urlControllerFactory;
