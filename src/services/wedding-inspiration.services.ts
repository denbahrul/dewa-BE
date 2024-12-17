import { addWeddingInspirationDTO } from "../dto/wedding-inspiration.dto";
import weddingInspirationRepositories from "../repositories/wedding-inspiration.repositories";

class WeddingInspirationServices {
  async findAll() {
    return await weddingInspirationRepositories.findAll();
  }

  async create(dto: addWeddingInspirationDTO) {
    return await weddingInspirationRepositories.create(dto);
  }
}

export default new WeddingInspirationServices();
