const express = require("express");
const {
  getHomes,
  populateHomesDB,
  postHome,
  getHomeCategory,
  getHomePincode,
  getHomeByID,
  getHomeSearch,
  updateHomeByID,
  deleteHomeByID,
} = require("../controller/homes.controller");

const Router = express.Router();

Router.route("/").get(getHomes).post(postHome);
Router.route("/search").get(getHomeSearch);
Router.route("/:id")
  .get(getHomeByID)
  .put(updateHomeByID)
  .delete(deleteHomeByID);
Router.route("/category/:category").get(getHomeCategory);
Router.route("/pincode/:pincode").get(getHomePincode);
Router.route("/populate").post(populateHomesDB);

module.exports = Router;
