const Sequelize = require("sequelize");
const sequelize = require("../dbconnection").sequelize;
module.exports = {
  userModel: require("./users")(Sequelize, sequelize, Sequelize.DataTypes),
  userModel: require("./userInterest")(
    Sequelize,
    sequelize,
    Sequelize.DataTypes
  ),
  userModel: require("./interest")(Sequelize, sequelize, Sequelize.DataTypes),
};
