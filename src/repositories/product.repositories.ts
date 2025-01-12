import { addProductDTO } from "../dto/product.dto";
import { prisma } from "../libs/prisma";

class ProductRepositories {
  async create(dto: addProductDTO) {
    const { categoryId, ...data } = dto;
    return prisma.product.create({
      data: {
        ...data,
        categoryId: +categoryId,
      },
    });
  }

  async findAll() {
    return prisma.product.findMany({
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async findById(productId: number) {
    return prisma.product.findUnique({
      where: {
        id: productId,
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async delete(productId: number) {
    return prisma.product.delete({
      where: {
        id: productId,
      },
    });
  }
}

export default new ProductRepositories();
