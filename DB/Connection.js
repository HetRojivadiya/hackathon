const mongoose = require("mongoose");

const connectDB = (uri) => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Database Connected"))
    .catch((err) => console.error(err));
};

module.exports = connectDB;
