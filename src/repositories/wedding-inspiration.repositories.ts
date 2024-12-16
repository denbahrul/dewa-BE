import { prisma } from "../libs/prisma";

class WeddingInspirationRepositories {
  async findAll() {
    return prisma.weddingInspiration.findMany();
  }
}

export default new WeddingInspirationRepositories();
