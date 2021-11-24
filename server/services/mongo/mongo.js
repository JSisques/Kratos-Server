const mongoose = require("mongoose");
const constants = require("../../util/constants");

const url = constants.mongoUrl + constants.mongoPort;
const client = new MongoClient.connect(url);

module.exports = client;
