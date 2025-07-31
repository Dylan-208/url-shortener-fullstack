import UrlRepository from "../../repositories/UrlRepository";
import UrlService from "../../service/UrlService";

export const urlServiceFactory = new UrlService(new UrlRepository());
