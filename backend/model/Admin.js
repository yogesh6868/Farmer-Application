const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const farmerSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Admin", farmerSchema);
