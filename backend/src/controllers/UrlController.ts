import { Request, Response } from "express";
import { slugBase, urlBase } from "../controllers/schema/UrlSchema";
import { urlServiceFactory } from "./factory/UrlServiceFactory";

class ControllerUrl {
  async create(req: Request, res: Response) {
    try {
      await urlBase.validate(req.body);

      const { url } = req.body;

      const response = await urlServiceFactory.create(url);

      res.status(201).json(response);
    } catch (err: any) {
      if (err.message === "Url ´necessária" || "O formato deve ser uma url") {
        res.status(400).json({ Error: err.message });
      }
      res.status(500).json({ Error: err.message });
    }
  }

  async get(req: Request, res: Response) {
    try {
      await slugBase.validate(req.params);

      const { slug } = req.params;

      const response = await urlServiceFactory.get(slug);

      res.status(200).redirect(response);
    } catch (err: any) {
      if (err.message === "Link não existente") {
        res.status(400).json({ Error: err.message });
      } else {
        res.status(500).json({ Error: "Erro no servidor" });
      }
    }
  }
}

export default ControllerUrl;
