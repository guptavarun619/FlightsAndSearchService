const validateCreateFlight = (req, res, next) => {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.arrivalAirportId ||
    !req.body.departureAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price
  ) {
    // if any of the required body params is missing
    return res.status(400).json({
      data: {},
      success: false,
      message: "Invalid request boyd for creating flight",
      err: "Missing mandatory properties to create a flight",
    });
  }

  next();
};

module.exports = {
  validateCreateFlight,
};
