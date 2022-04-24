const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
function connect() {
  mongoose
    .connect(process.env.URL_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) =>
      console.log("[db connection] connected server: " + data.connection.host)
    )
    .catch((err) => console.log(`[db connection] error `));
}

module.exports = connect;
