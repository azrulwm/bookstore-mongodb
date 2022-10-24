const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

let dbConnection;

module.exports = {
  connectToDb: async (cb) => {
    try {
      const client = await MongoClient.connect("mongodb://localhost:27017");
      dbConnection = client.db("bookstore");
      console.log("database connected");
      return cb();
    } catch (error) {
      console.log(error);
      return cb(error);
    }
  },
  getDb: () => {
    return dbConnection;
  },
};
