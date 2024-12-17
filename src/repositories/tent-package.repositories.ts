import { addTentPackageDTO } from "../dto/tent-package.dto";
import { prisma } from "../libs/prisma";

class TentPackageRepositories {
  async create(data: addTentPackageDTO) {
    return prisma.tentPackage.create({
      data,
    });
  }

  async findAll() {
    return prisma.tentPackage.findMany();
  }

  async findById(packageId: number) {
    return prisma.tentPackage.findUnique({
      where: {
        id: packageId,
      },
    });
  }
}

export default new TentPackageRepositories();
