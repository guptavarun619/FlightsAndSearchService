const { Flights } = require("../models/index");
const { Op } = require("sequelize");
class FlightRepository {
  #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    // and approach to build and array for price filter
    let priceFilter = [];
    if (data.minPrice) {
      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice) {
      priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
    }
    Object.assign(filter, { [Op.and]: priceFilter });
    // if (data.minPrice && data.maxPrice) {
    //   Object.assign(filter, {
    //     [Op.and]: [
    //       { price: { [Op.gte]: data.minPrice } },
    //       { price: { [Op.lte]: data.maxPrice } },
    //     ],
    //   });
    // } else if (data.minPrice) {
    //   Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
    // } else if (data.maxPrice) {
    //   Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
    // }
    // this won't work as price would be reassigned to an operator of lte (less than equal to)
    // so we can use and operator as follows
    // Object.assign(filter, {
    //   [Op.and]: [
    //     { price: { [Op.gte]: data.minPrice } },
    //     { price: { [Op.lte]: data.maxPrice } },
    //   ],
    // });
    return filter;
  }

  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
  async getFlight(flightId) {
    try {
      const flight = await Flights.findByPk(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async getAllFlight(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const flights = await Flights.findAll({
        where: filterObject,
      });
      return flights;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
}

module.exports = FlightRepository;

/*
{
    where: {
        arrivalAirportId: 2,
        departureAirportId: 4,
        price : {[Op.gte]: 4000},
    }
}

*/
