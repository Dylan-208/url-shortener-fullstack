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
Object.defineProperty(exports, "__esModule", { value: true });
const UrlSchema_1 = require("../controllers/schema/UrlSchema");
const UrlServiceFactory_1 = require("./factory/UrlServiceFactory");
class ControllerUrl {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UrlSchema_1.urlBase.validate(req.body);
                const { url } = req.body;
                const response = yield UrlServiceFactory_1.urlServiceFactory.create(url);
                res.status(201).json(response);
            }
            catch (err) {
                if (err.message === "Url ´necessária" || "O formato deve ser uma url") {
                    res.status(400).json({ Error: err.message });
                }
                res.status(500).json({ Error: err.message });
            }
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UrlSchema_1.slugBase.validate(req.params);
                const { slug } = req.params;
                const response = yield UrlServiceFactory_1.urlServiceFactory.get(slug);
                res.status(200).redirect(response);
            }
            catch (err) {
                if (err.message === "Link não existente") {
                    res.status(400).json({ Error: err.message });
                }
                else {
                    res.status(500).json({ Error: "Erro no servidor" });
                }
            }
        });
    }
}
exports.default = ControllerUrl;
