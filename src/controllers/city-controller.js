const { CityService } = require("../services/index");

// Creating a global CityService object so we can use this object anywhere
const cityService = new CityService();

const create = async (req, res) => {
  try {
    const cityCreated = await cityService.createCity(req.body);
    res.status(201).json({
      data: cityCreated,
      success: true,
      message: "Successfully created a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Unable to create a city",
      err: error,
    });
  }
};

// [DELETE] => /city/:id
const destroy = async (req, res) => {
  try {
    const response = await cityService.deleteCity(req.params.id);
    res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Unable to delete a city",
      err: error,
    });
  }
};

// [GET] => /city/:id
const get = async (req, res) => {
  try {
    const city = await cityService.getCity(req.params.id);
    res.status(200).json({
      data: city,
      success: true,
      message: "Successfully fetched a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetch city",
      err: error,
    });
  }
};

// [GET] => /city/
const getAll = async (req, res) => {
  try {
    const allCities = await cityService.getAllCities(req.query);
    res.status(200).json({
      data: allCities,
      success: true,
      message: "Successfully fetched all Cities",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetch all city",
      err: error,
    });
  }
};

// [PATCH] => /city/:id (new data will be in req.body)
const update = async (req, res) => {
  try {
    const city = await cityService.updateCity(req.params.id, req.body);
    res.status(200).json({
      data: city,
      success: true,
      message: "Successfully updated a city",
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      data: {},
      success: false,
      message: "Unable to update city",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
};
