const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "departmentDB",
  });

  // connect to the mysql server and sql database
connection.connect((err) => {
    if (err) {
      throw err;
    } else {
    start();
    }

  });


  function start() {
    return inquirer
      .prompt({
        name: "startChoice",
        type: "list",
        message: "Would you like to [ADD] a department, role, or employee, [VIEW] current departments, rolls, or employees lists, [UPDATE] a current employee, or [EXIT]?",
        choices: ["ADD", "VIEW", "UPDATE", "EXIT"],
      })
      .then((answer) => {
        // based on their answer, either call the bid or the post functions
        if (answer.startChoice === "ADD") {
          return addOption();
        } else if (answer.postOrBid === "VIEW") {
          return viewOption();
        } else if (answer.postOrBid === "UPDATE") {
          return updateEmployee();
        } else {
          connection.end();
        }
      })
      .catch((error) => {
        console.log(error);
        process.exit(1);
      });
  }

  function addOption() {
    return inquirer
      .prompt({
        name: "addChoice",
        type: "list",
        message: "Would you like to add an [EMPLOYEE], a [ROLE], a [DEPARTMENT], or [EXIT]?",
        choices: ["EMPLOYEE", "ROLE", "DEPARTMENT", "EXIT"],
      })
      .then((answer) => {
        // based on their answer, either call the bid or the post functions
        if (answer.startChoice === "EMPLOYEE") {
          return addEmployee();
        } else if (answer.postOrBid === "ROLE") {
          return viewRole();
        } else if (answer.postOrBid === "DEPARTMENT") {
          return updateDepartment();
        } else {
          connection.end();
        }
      })
      .catch((error) => {
        console.log(error);
        process.exit(1);
      });
  }