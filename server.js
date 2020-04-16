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
    process.exit();
    }

  });


  function start() {
    return inquirer
      .prompt({
        name: "postOrBid",
        type: "list",
        message: "Would you like to [POST] an auction or [BID] on an auction?",
        choices: ["POST", "BID", "EXIT"],
      })
      .then((answer) => {
        // based on their answer, either call the bid or the post functions
        if (answer.postOrBid === "POST") {
          return postAuction();
        } else if (answer.postOrBid === "BID") {
          return bidAuction();
        } else {
          connection.end();
        }
      })
      .catch((error) => {
        console.log(error);
        process.exit(1);
      });
  }