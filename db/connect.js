const mongoose = require("mongoose");

async function spin_server(app, PORT) {
  try {
    await mongoose.connect("mongodb://0.0.0.0:27017/real_estate");

    app.listen(PORT, () => {
      console.log(`Listening at port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = spin_server;
