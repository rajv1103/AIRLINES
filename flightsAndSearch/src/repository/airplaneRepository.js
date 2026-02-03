const { Airplanes } = require("../models/airplane");

class airplaneRespository {
  async getAirplane(id) {
    try {
      const airplane = await Airplanes.findByPk(id);
      return airplane;
    } catch (e) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports=airplaneRespository;
