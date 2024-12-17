import { Request, Response } from "express";
import cloudinaryServices from "../services/cloudinary.services";
import { addProductDTO } from "../dto/product.dto";
import productServices from "../services/product.services";

class ProductControllers {
  async create(req: Request, res: Response) {
    try {
      const body: addProductDTO = req.body;
      const fileUpload = req.file;

      if (fileUpload) {
        const image = await cloudinaryServices.upload(fileUpload as Express.Multer.File);
        body.imageUrl = image.secure_url;
      }

      const data = await productServices.create(body);

      res.json({
        message: "Produk ditambahkan",
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

  async findAll(req: Request, res: Response) {
    try {
      const data = await productServices.findAll();
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

  async findById(req: Request, res: Response) {
    try {
      const productId = req.params.id;
      const data = await productServices.findById(+productId);
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

export default new ProductControllers();
