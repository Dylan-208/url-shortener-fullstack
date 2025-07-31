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
const PrismaFactory_1 = require("../controllers/factory/PrismaFactory");
class UrlRepository {
    create(url, slug) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PrismaFactory_1.prismaFactory.url.create({
                data: {
                    originalUrl: url,
                    slug,
                },
            });
        });
    }
    getByUrl(url) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PrismaFactory_1.prismaFactory.url.findFirst({
                where: {
                    originalUrl: url,
                },
            });
        });
    }
    getBySlug(slug) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield PrismaFactory_1.prismaFactory.url.findUnique({
                where: {
                    slug,
                },
            });
        });
    }
}
exports.default = UrlRepository;
