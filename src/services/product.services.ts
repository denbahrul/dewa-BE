import { addProductDTO } from "../dto/product.dto";
import productRepositories from "../repositories/product.repositories";

class ProductServices {
  async create(body: addProductDTO) {
    return await productRepositories.create(body);
  }

  async findAll() {
    return await productRepositories.findAll();
  }

  async findById(packageId: number) {
    return await productRepositories.findById(packageId);
  }
}

export default new ProductServices();
