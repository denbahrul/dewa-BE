import { addTentPackageDTO } from "../dto/tent-package.dto";
import tentPackageRepositories from "../repositories/tent-package.repositories";

class TentPackageServices {
  async create(body: addTentPackageDTO) {
    return await tentPackageRepositories.create(body);
  }

  async findAll() {
    return await tentPackageRepositories.findAll();
  }

  async findById(packageId: number) {
    return await tentPackageRepositories.findById(packageId);
  }
}

export default new TentPackageServices();
