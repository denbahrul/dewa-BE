import { addWeddingInspirationDTO } from "../dto/wedding-inspiration.dto";
import { prisma } from "../libs/prisma";

class WeddingInspirationRepositories {
  async findAll() {
    return prisma.weddingInspiration.findMany();
  }
  async create(data: addWeddingInspirationDTO) {
    return prisma.weddingInspiration.create({
      data,
    });
  }
}

export default new WeddingInspirationRepositories();
