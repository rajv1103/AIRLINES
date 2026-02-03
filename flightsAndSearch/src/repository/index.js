const airplaneRepository = require("./airplaneRepository");
const flightRepository = require("./flightRepository");

module.exports = {
  CityRepository: require("./cityRepository"),
  FlightRepository: flightRepository,
  flightRepository,
  AirplaneRespository: airplaneRepository,
  airplaneRepository,
};
