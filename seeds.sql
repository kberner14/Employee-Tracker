USE departmentDB;

INSERT INTO department (name)
VALUES ("Engineering");
INSERT INTO department (name)
VALUES ("Legal");
INSERT INTO department (name)
VALUES ("Sales");


USE roleDB;

INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 75000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Sales", 800000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Sale Representative", 600000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Legal Advisor", 150000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 100000, 3);

/* Seeds for SQL table. We haven't discussed this type of file yet */
USE employeeDB;

/* Insert 3 Rows into your new table */
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ferris", "Bueller", 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Danny", "Phantom", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Marry", "Magdolen", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Charlize", "Therone", 2, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mac", "Dre", 3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Keenan", "Smith", 4, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James", "Delos", 4, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Hellen", "Bonham-Carter", 4, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jack", "Skellington", 5, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Santa", "Clause", 6, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Oogie", "Boogie", 6, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Mayor", 6, 3);
