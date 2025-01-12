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
  async delete(inspirationId: number) {
    return await prisma.weddingInspiration.delete({
      where: {
        id: inspirationId,
      },
    });
  }
}

export default new WeddingInspirationRepositories();
