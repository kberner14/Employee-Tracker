const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table")

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
            name: "start_choice",
            type: "list",
            message: "Would you like to [ADD] a department, role, or employee, [VIEW] current departments, rolls, or employees lists, [UPDATE] a current employee, or [EXIT]?",
            choices: ["ADD", "VIEW", "UPDATE", "EXIT"],
        })
        .then((answer) => {
            // based on their answer, either call the bid or the post functions
            if (answer.start_choice === "ADD") {
                return addOption();
            } else if (answer.start_choice === "VIEW") {
                return viewOption();
            } else if (answer.start_choice === "UPDATE") {
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
            name: "add_choice",
            type: "list",
            message: "Would you like to add an [EMPLOYEE], a [ROLE], a [DEPARTMENT], or [EXIT]?",
            choices: ["EMPLOYEE", "ROLE", "DEPARTMENT", "EXIT"],
        })
        .then((answer) => {
            // based on their answer, either call the bid or the post functions
            if (answer.add_choice === "EMPLOYEE") {
                return addEmployee();
            } else if (answer.add_choice === "ROLE") {
                return addRole();
            } else if (answer.add_choice === "DEPARTMENT") {
                return addDepartment();
            } else {
                connection.end();
            }
        })
        .catch((error) => {
            console.log(error);
            process.exit(1);
        });
}

function addEmployee() {
    // query the database for all employees
    return connection.query("SELECT * FROM employee", (err, results) => {
        if (err) {
            throw err;
        }
        const employeeNames = results.map((row) => row.first_name + " " + row.last_name);
        // once you have the items, prompt the user for which they'd like to bid on
        // prompt for info about the item being put up for auction
        return inquirer
            .prompt([
                {
                    name: "first_name",
                    type: "input",
                    message: "What is the employee's first name?",
                },
                {
                    name: "last_name",
                    type: "input",
                    message: "What is the employee's first name??",
                },
                {
                    name: "role_id",
                    type: "list",
                    message: "Are they a [1. LEAD ENGINEER], [2. SOFTWARE ENGINEER], [3.LEAD SALES ], [4.SALE REPRESENTATIVE ], [5. LEAD LEGAL ADVISOR], [6. LAWYER]?",
                    choices: [1, 2, 3, 4, 5, 6]
                },
                {
                    //manager id will be grabbed from answer to does this person have a manager
                    name: "manager_id",
                    type: "list",
                    message: "Who is this person's manager?",
                    choices: employeeNames
                },
            ])
            .then((answer) => {
                // when finished prompting, insert a new item into the db with that info
                return connection.query(
                    "INSERT INTO employee SET ?",
                    {
                        first_name: answer.first_name,
                        last_name: answer.last_name,
                        role_id: answer.role_id,
                        manager_id: answer.id,
                    },
                    (err) => {
                        if (err) {
                            throw err;
                        }
                        console.log("Your employee was successfully logged!");
                        // re-prompt the user for if they want to bid or post
                        return start();
                    }
                );
            });
    });
}

function addRole() {
    return inquirer
        .prompt([
            {
                name: "title_name",
                type: "input",
                message: "What is the title of this role?",
            },
            {
                name: "salary",
                type: "input",
                message: "What is this role's salary?",
            },
            {
                name: "department_id",
                type: "list",
                message: "Which department does this role belong to? [1. ENGINEERING], [2. LEGAL], or [3. SALES ]",
                choices: [1, 2, 3]
            },
        ])
        .then((answer) => {
            // when finished prompting, insert a new item into the db with that info
            return connection.query(
                "INSERT INTO role SET ?",
                {
                    title: answer.first_name,
                    salary: answer.last_name,
                    department_id: answer.role_id,
                },
                (err) => {
                    if (err) {
                        throw err;
                    }
                    console.log("Your role was successfully logged!");
                    // re-prompt the user for if they want to bid or post
                    return start();
                }
            );
        });
};

function addDepartment() {
    return inquirer
        .prompt([
            {
                name: "department_name",
                type: "input",
                message: "What is the name of this department?",
            },
        ])
        .then((answer) => {
            // when finished prompting, insert a new item into the db with that info
            return connection.query(
                "INSERT INTO department SET ?",
                {
                    name: answer.department_name,
                },
                (err) => {
                    if (err) {
                        throw err;
                    }
                    console.log("Your department was successfully logged!");
                    // re-prompt the user for if they want to bid or post
                    return start();
                }
            );
        });
};




function viewOption() {
    return inquirer
        .prompt({
            name: "view_choice",
            type: "list",
            message: "Would you like the list of [EMPLOYEES], [ROLES], [DEPARTMENTS], [ALL]. or [EXIT]?",
            choices: ["EMPLOYEE", "ROLE", "DEPARTMENT", "ALL", "EXIT"],
        })
        .then((answer) => {
            // based on their answer, either call the bid or the post functions
            if (answer.view_choice === "EMPLOYEES") {
                return viewEmployee();
            } else if (answer.view_choice === "ROLES") {
                return viewRole();
            } else if (answer.view_choice === "DEPARTMENTS") {
                return viewDepartment();
            } else if (answer.view_choice === "ALL") {
                return viewAll();
            } else {
                connection.end();
            }
        })
        .catch((error) => {
            console.log(error);
            process.exit(1);
        });
}





function updateEmployee() {
    // query the database for all items being auctioned
    return connection.query("SELECT * FROM employee", (err, results) => {
        if (err) {
            throw err;
        }
        const employeeNames = results.map((row) => row.first_name + " " + row.last_name);
        // once you have the items, prompt the user for which they'd like to bid on
        return inquirer
            .prompt([
                {
                    name: "update_choice",
                    type: "list",
                    message: "Which employee would you like to update?",
                    choices: [employeeNames],
                },
                {
                    name: "first_name",
                    type: "input",
                    message: "What is their first name?",
                },
                {
                    name: "last_name",
                    type: "input",
                    message: "What is their last name?",
                },
                {
                    name: "role_id",
                    type: "input",
                    message: "What is their role ID?",
                },
                {
                    name: "manager_id",
                    type: "input",
                    message: "What is their manager's ID?",
                },
            ])
            .then((answer) => {
                return connection.query(
                    "UPDATE employee SET ? WHERE ?",
                    [
                        {
                            first_name: answer.first_name,
                            last_name: answer.last_name,
                            role_id: answer.role_id,
                            manager_id: answer.view_choice,
                        },
                        {
                            id: answer.id
                        },
                    ],
                    (err) => {
                        if (err) {
                            throw err;
                        }
                        console.log("Your employee was successfully logged!");
                        // re-prompt the user for if they want to bid or post
                        return start();
                    }
                );
            });
    });
}

