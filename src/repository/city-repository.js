const { City } = require("../models/index");
const { Op } = require("sequelize");
class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      //   this approach works just fine but returns an array with an element 1,
      //   that indicates the updation was completed and does not return the updated record
      //   while using Postgres `returning: true` key can be passed just after where clause but is not supported in MySQL
      //   const city = await City.update(data, {
      //     where: { id: cityId },
      //   });

      //   the approach that works for MySQL to get the updated record is to,
      //   find the target record, make the changes in it's object form and save it to DB

      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();

      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAllCities(filter) {
    // here filter is an optinal argument
    try {
      if (filter.name) {
        const citites = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return citites;
      }
      const allCities = await City.findAll();
      return allCities;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
