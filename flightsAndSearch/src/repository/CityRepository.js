const { City } = require("../models");
const {Op}=require("sequelize")
class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw error;
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: { id: cityId },
      });
    } catch (error) {
      throw error;
    }
  }
  async updateCity(cityId, name) {
    try {
      const respone = await City.update(name, {
        where: {
          id: cityId,
        },
      });
      return respone;
    } catch (error) {
      throw error;
    }
  }
  async getCity(cityId) {
    try {
      const city = City.findOne({
        where: {
          id: cityId,
        },
      });
      return city;
    } catch (error) {
      throw error;
    }
  }
  async getAllCities(filter) {
    try {
      if (filter.name) {
        const cities = City.findAll({
          where: {
            name:{
              [Op.startsWith]:filter.name
            }
          }, 
        });
        return cities;
      }
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CityRepository;
