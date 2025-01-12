import { Request, Response } from "express";
import { addTentPackageDTO } from "../dto/tent-package.dto";
import cloudinaryServices from "../services/cloudinary.services";
import tentPackageServices from "../services/tent-package.services";

class TentPackageControllers {
  async create(req: Request, res: Response) {
    try {
      const body: addTentPackageDTO = req.body;
      const fileUpload = req.file;

      if (fileUpload) {
        const image = await cloudinaryServices.upload(fileUpload as Express.Multer.File);
        body.imageUrl = image.secure_url;
      }

      const data = await tentPackageServices.create(body);

      res.json({
        message: "Paket tenda ditambahkan",
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
      const data = await tentPackageServices.findAll();
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
      const packageId = req.params.id;
      const data = await tentPackageServices.findById(+packageId);
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

  async delete(req: Request, res: Response) {
    try {
      const packageId = +req.params.id;
      const data = await tentPackageServices.delete(packageId);
      res.json({
        message: `Product ${data.name} was deleted`,
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

export default new TentPackageControllers();
