const { MongoClient } = require("mongodb");

let dbConnection;

module.exports = {
  connectToDb: async (cb) => {
    try {
      const client = await MongoClient.connect("mongodb://localhost:27017");
      dbConnection = client.db("bookstore");
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
