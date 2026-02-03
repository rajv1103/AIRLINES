const { airplaneRepository, flightRepository } = require("../repository/index");

class flightServices {
  constructor() {
    this.airplaneRepository = new airplaneRepository();
    this.flightRepository = new flightRepository();
  }
  async createFlight(data) {
    try {
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival time cannot be less than departure time" };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId,
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
    }  catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
  }

    async getFlightData(data) {
          try {
            const flights = await this.flightRepository.getAllFlightsData(data);
            return flights;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }
      async getFlight(flightId) {
        try {
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

    async updateFlight(flightId, data) {
        try {
            const response = await this.flightRepository.updateFlights(flightId, data);
            return response;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw {error};
        }
    }

}
module.exports = flightServices;