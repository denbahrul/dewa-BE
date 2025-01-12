import { Request, Response } from "express";
import weddingInspirationServices from "../services/wedding-inspiration.services";
import { addWeddingInspirationDTO } from "../dto/wedding-inspiration.dto";
import cloudinaryServices from "../services/cloudinary.services";

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

  async create(req: Request, res: Response) {
    try {
      const body: addWeddingInspirationDTO = req.body;
      const fileUpload = req.file;

      if (fileUpload) {
        const image = await cloudinaryServices.upload(fileUpload as Express.Multer.File);
        body.imageUrl = image.secure_url;
      }

      const data = await weddingInspirationServices.create(body);
      res.json({
        message: "Inspirasi wedding ditambahkan",
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

  async delete(req: Request, res: Response) {
    try {
      const inspirationId = +req.params.id;
      const data = await weddingInspirationServices.delete(inspirationId);
      res.json({
        message: `Product ${data.title} was deleted`,
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
