"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlServiceFactory = void 0;
const UrlRepository_1 = __importDefault(require("../../repositories/UrlRepository"));
const UrlService_1 = __importDefault(require("../../service/UrlService"));
exports.urlServiceFactory = new UrlService_1.default(new UrlRepository_1.default());
