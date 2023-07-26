const express = require("express");
const cors = require('cors');
const app = express();
var corsOptions = {
    origin: "http://localhost:8081"
};
 
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get(
    "/", (req,res) => {
        res.json({message: "welcome to nodejs app."});
    }
);

const db = require("./src/app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
  db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });

  require("./src/app/routes/studentdetails.routes")(app);

const port = process.env.port || 8081;
app.listen(port, () => {
    console.log(`server is running on: ${port}.`);
});

