const crudServices = require("./crudServices");
const { airportRespository } = require("../repository/index");

class AirportService extends crudServices {
  constructor() {
    const airportRespository = new airportRespository();
    super(airportRespository);
  }
}

module.exports = AirportService;
