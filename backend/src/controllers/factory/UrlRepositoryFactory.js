"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlRepositoryFactory = void 0;
const UrlRepository_1 = __importDefault(require("../../repositories/UrlRepository"));
exports.urlRepositoryFactory = new UrlRepository_1.default();
