const db = require("../models");
const Studentdetail = db.studentdetails;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.firstname) {
      res.status(400).send({
        message: "firstname  can not be empty!"
      });
      return;
    }
    if (!req.body.dob) {
      res.status(400).send({
        message: "dob  can not be empty!"
      });
      return;
    }
  
  
    // Calculate total and average
    const telugu = parseInt(req.body.telugu);
    const english = parseInt(req.body.english);
    const maths = parseInt(req.body.maths);

    const total = (telugu + english + maths);
    const avg = (total / 3);
    const status = (avg >= 35) ? 'pass' : 'fail';

    // Create a studentdetails
    const studentdetail = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        dob: req.body.dob,
        telugu: req.body.telugu,
        english: req.body.english,
        maths: req.body.maths,

        total: total,
        avg: avg,
        status: status 
    };

//   const record_status = true;


//   console.log("rec sts::",record_status)
// if(record_status){
    // Save Tutorial in the database
    Studentdetail.create(studentdetail)
      .then(data => {
        msg = {"message":"record inserted success."};
        res.send(msg);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Studentdetail."
        });
      });
    // }else{

    //   res.status(500).send({
    //     message: err_msg
    //   });

    // }

  };

  exports.findAll = (req, res) => {
    // const firstname = req.query.firstname;
    // var condition = firstname ? { firstname: { [Op.like]: `%${firstname}%` } } : null;
    // where: condition
    Studentdetail.findAll({  })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Studentdetail."
        });
      });
  };

  exports.deleteAll = (req, res) => {
    Studentdetail.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Studentdetails were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Studentdetails."
        });
      });
  };