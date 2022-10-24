const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

let dbConnection;

module.exports = {
  connectToDb: async (cb) => {
    mongoose.connect("mongodb://localhost:27017/bookstore");

    const connection = await mongoose.connection;
    connection.on("error", console.error.bind(console, "connection error: "));
    connection.once("open", async function () {
      console.log("Connected successfully");

      // dbConnection = connection.db;
      // console.log(dbConnection);
      // const collection = dbConnection.collection("books");
      dbConnection = connection.db.collection("books");
      console.log("for collection");
      // console.log(collection);

      // collection.find({}).toArray(function (err, data) {
      //   console.log(data);
      // });
    });

    return cb();
    if (err) {
      console.log(err);
      return cb(err);
    }
  },
  getDb: async () => {
    console.log(await dbConnection, "testing");
    return dbConnection;
  },
};
