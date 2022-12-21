class CrudService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    try {
      const response = await this.repository.create(data);
      return response;
    } catch (error) {
      console.log("Something went wrong in CRUD service");
      throw error;
    }
  }

  async destory(id) {
    try {
      await this.repository.destory(data);
      return true;
    } catch (error) {
      console.log("Something went wrong in CRUD service");
      throw error;
    }
  }

  async get(id) {
    try {
      const response = await this.repository.findByPk(id);
      return response;
    } catch (error) {
      console.log("Something went wrong in CRUD service");
      throw error;
    }
  }

  async getAll() {
    try {
      const response = await this.repository.findAll();
      return response;
    } catch (error) {
      console.log("Something went wrong in CRUD service");
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.repository.update(id, data);
      return response;
    } catch (error) {
      console.log("Something went wrong in CRUD service");
      throw error;
    }
  }
}

module.exports = CrudService;
