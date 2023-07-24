module.exports = (sequelize, Sequelize) => {
    const { DataTypes } = require('sequelize');
    const Studentdetail = sequelize.define('studentdetail', {
        firstname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        lastname: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        dob: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        telugu: {
          type: DataTypes.INTEGER, // Assuming 'telugu' is an integer
          allowNull: false,
        },
        english: {
          type: DataTypes.INTEGER, // Assuming 'english' is an integer
          allowNull: false,
        },
        maths: {
          type: DataTypes.INTEGER, // Assuming 'maths' is an integer
          allowNull: false,
        },
        total: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        avg: {
          // type: DataTypes.FLOAT,
          // precision: 8,
          // scale: 2,
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
        },
        status: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      });
  
    return Studentdetail;
  };