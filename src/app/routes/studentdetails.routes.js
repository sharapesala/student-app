module.exports = app => {
    const studentdetails = require("../controllers/studentdetails.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", studentdetails.create);
    router.get("/", studentdetails.findAll);
    router.delete("/", studentdetails.deleteAll);

    app.use('/api/studentdetails', router);    
};