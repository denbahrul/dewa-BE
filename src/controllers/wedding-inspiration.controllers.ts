import { Request, Response } from "express";
import weddingInspirationServices from "../services/wedding-inspiration.services";

class WeddingInspirationControllers {
  async findAll(req: Request, res: Response) {
    try {
      const data = await weddingInspirationServices.findAll();
      res.json({
        data,
      });
    } catch (error) {
      console.log(error);
      const err = error as Error;
      res.status(500).json({
        message: err.message,
      });
    }
  }
}

export default new WeddingInspirationControllers();
