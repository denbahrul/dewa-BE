import { addProductDTO } from "../dto/product.dto";
import productRepositories from "../repositories/product.repositories";

class ProductServices {
  async create(body: addProductDTO) {
    return await productRepositories.create(body);
  }

  async findAll() {
    return await productRepositories.findAll();
  }

  async findById(productId: number) {
    return await productRepositories.findById(productId);
  }

  async delete(productId: number) {
    return await productRepositories.delete(productId);
  }
}

export default new ProductServices();
