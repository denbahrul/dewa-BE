import weddingInspirationRepositories from "../repositories/wedding-inspiration.repositories";

class WeddingInspirationServices {
  async findAll() {
    return await weddingInspirationRepositories.findAll();
  }
}

export default new WeddingInspirationServices();
