import { prismaFactory } from "../controllers/factory/PrismaFactory";

class UrlRepository {
  async create(url: string, slug: string) {
    return await prismaFactory.url.create({
      data: {
        originalUrl: url,
        slug,
      },
    });
  }

  async getByUrl(url: string) {
    return await prismaFactory.url.findFirst({
      where: {
        originalUrl: url,
      },
    });
  }

  async getBySlug(slug: string) {
    return await prismaFactory.url.findUnique({
      where: {
        slug,
      },
    });
  }
}

export default UrlRepository;
