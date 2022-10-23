const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

let dbConnection;

module.exports = {
  connectToDb: async (cb) => {
    try {
      const client = await mongoose.connect(
        "mongodb://localhost:27017/bookstore"
      );
      dbConnection = client.db();
      console.log(dbConnection);
      return cb();
    } catch (err) {
      console.log(err);
      return cb(err);
    }
  },
  getDb: () => {
    dbConnection;
  },
};
