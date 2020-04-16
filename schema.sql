DROP DATABASE IF EXISTS departmentDB;
CREATE database departmentDB;

USE departmentDB;

CREATE TABLE department (
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
 );

CREATE TABLE role (
  id INTEGER AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
  id INTEGER AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  role_id INT NOT NULL,
  manager_id INTEGER,
  PRIMARY KEY (id),
  FOREIGN KEY (role_title) REFERENCES role(title),
  FOREIGN KEY (manager_id) REFERENCES employee(id),
);
  


SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;
SELECT * FROM emploree WHERE first_name;


-- This is the command for view departments --
SELECT department.id, department.name FROM department;

-- This is the command for view roles
SELECT role.id, role.title, role.salary, department.name AS department FROM role JOIN department ON role.department_id = department.id;

-- This is the command for view employees --
SELECT e.id, e.first_name, e.last_name, role.title, CONCAT(m.first_name, " ", m.last_name) AS manager, role.salary, department.name  
FROM employee e
JOIN role 
ON e.role_id = role.id JOIN employee m
ON e.role_id = m.id JOIN department 
ON role.department_id = department.id;



 JOIN employee
ON employee.manager_id = employee.id;

 CONCAT(employee.first_name, ' ', employee.last_name)
