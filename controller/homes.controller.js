const Home = require("../model/homes.model");
const dummyProperties = require("../constants/dummyData");

const getHomes = async (req, res) => {
  const homes = await Home.find({});
  return res.status(200).json({ data: homes, length: homes.length });
};

const postHome = async (req, res) => {
  try {
    const newHome = await Home.create(req.body);
    return res.status(200).json(newHome);
  } catch (error) {
    console.log(error);
    return res.status(404).json({ msg: "Can't add Home!!!" });
  }
};

const populateHomesDB = async (req, res) => {
  try {
    const properties = await Home.insertMany(dummyProperties);
    return res.status(200).json(properties);
  } catch (error) {
    return res.status(404).json({ msg: "Can't populate data!!!" });
  }
};

const getHomeCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const homes = await Home.find({ category });
    return res.status(200).json({ data: homes, length: homes.length });
  } catch (error) {
    return res.status(404).json({ msg: "Can't get Homes by category" });
  }
};

const getHomePincode = async (req, res) => {
  try {
    const { pincode } = req.params;
    const homes = await Home.find({ pincode });
    return res.status(200).json({ data: homes, length: homes.length });
  } catch (error) {
    return res.status(404).json({ msg: "Can't get Homes by pincode" });
  }
};

const getHomeSearch = async (req, res) => {
  try {
    const { maxPrice, minSqfeet, nBedrooms, nBathrooms } = req.query;

    const query = {};
    if (maxPrice) {
      query.price = { $lte: parseFloat(maxPrice) };
    }
    if (minSqfeet) {
      query.sqfeet = { $gte: parseInt(minSqfeet) };
    }
    if (nBedrooms) {
      query.nBedrooms = parseInt(nBedrooms);
    }
    if (nBathrooms) {
      query.nBathrooms = parseInt(nBathrooms);
    }
    console.log(query);

    const homes = await Home.find(query);
    return res.status(200).json({ data: homes, length: homes.length });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ msg: "Can't get Homes by search" });
  }
};

const getHomeByID = async (req, res) => {
  try {
    const { id } = req.params;
    const homes = await Home.find({ _id: id });
    return res.status(200).json({ data: homes, length: homes.length });
  } catch (error) {
    return res.status(404).json({ msg: "Can't get Home by ID" });
  }
};

const updateHomeByID = async (req, res) => {
  try {
    const { id } = req.params;
    const homes = await Home.findByIdAndUpdate(id, req.body, { new: true });
    return res.status(200).json({ data: homes, length: homes.length });
  } catch (error) {
    return res.status(404).json({ msg: "Can't update Home by ID" });
  }
};

const deleteHomeByID = async (req, res) => {
  try {
    const { id } = req.params;
    await Home.findOneAndDelete({ _id: id });
    return res.status(200).json({ msg: "Delete Successful!!" });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ msg: "Can't delete Home by ID" });
  }
};

module.exports = {
  getHomes,
  postHome,
  getHomeCategory,
  getHomePincode,
  populateHomesDB,
  getHomeSearch,
  getHomeByID,
  updateHomeByID,
  deleteHomeByID,
};
