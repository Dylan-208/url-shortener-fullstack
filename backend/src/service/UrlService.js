"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nanoid_1 = require("nanoid");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class UrlService {
    constructor(_urlRepository) {
        this._urlRepository = _urlRepository;
    }
    create(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const verifyUrl = yield this._urlRepository.getByUrl(url);
            if (verifyUrl) {
                const newUrl = `${process.env.URL_LOCAL}:${process.env.PORT}/${verifyUrl.slug}`;
                return newUrl;
            }
            const slug = (0, nanoid_1.nanoid)(6);
            const newUrlData = yield this._urlRepository.create(url, slug);
            const newUrl = `${process.env.URL_LOCAL}:${process.env.PORT}/${newUrlData.slug}`;
            return newUrl;
        });
    }
    get(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            const verifySlug = yield this._urlRepository.getBySlug(slug);
            console.log(verifySlug);
            if (!verifySlug)
                throw new Error("Link não existente");
            return verifySlug.originalUrl;
        });
    }
}
exports.default = UrlService;
