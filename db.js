const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    try {
      mongoose.connect("mongodb://localhost:27017/bookstore");

      const connection = mongoose.connection;
      connection.on("error", console.error.bind(console, "connection error: "));
      connection.once("open", async function () {
        console.log("Connected successfully");

        dbConnection = connection.db;
        console.log(dbConnection);
        const collection = dbConnection.collection("books");
        console.log(collection);

        // collection.find({}).toArray(function (err, data) {
        //   console.log(data);
        // });
      });

      return cb();
    } catch (err) {
      console.log(err);
      return cb(err);
    }
  },
  getDb: () => {
    return dbConnection;
  },
};
