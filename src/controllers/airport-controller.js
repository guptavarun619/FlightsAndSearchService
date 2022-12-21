const { AirportService } = require("../services/index");
const { SuccessCodes } = require("../utils/error-codes.js");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const response = await airportService.create(req.body);
    return res.status(SuccessCodes.CREATED).json({
      data: response,
      success: true,
      err: {},
      message: "Successfully created a new Airport",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Cannot create a new Airport",
    });
  }
};

module.exports = {
  create,
};
