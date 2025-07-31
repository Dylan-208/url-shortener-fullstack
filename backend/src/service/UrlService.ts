import UrlRepository from "../repositories/UrlRepository";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";

dotenv.config();

class UrlService {
  constructor(private _urlRepository: UrlRepository) {}

  async create(url: string) {
    const verifyUrl = await this._urlRepository.getByUrl(url);

    if (verifyUrl) {
      const newUrl = `${process.env.URL_LOCAL}:${process.env.PORT}/${verifyUrl.slug}`;
      return newUrl;
    }

    const slug: string = uuidv4();
    const newUrlData = await this._urlRepository.create(url, slug);
    console.log(slug);

    const newUrl = `${process.env.URL_LOCAL}:${process.env.PORT}/${newUrlData.slug}`;
    return newUrl;
  }

  async get(slug: string) {
    const verifySlug = await this._urlRepository.getBySlug(slug);
    console.log(verifySlug);

    if (!verifySlug) throw new Error("Link não existente");

    return verifySlug.originalUrl;
  }
}

export default UrlService;
