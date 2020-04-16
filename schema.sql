DROP DATABASE IF EXISTS departmentDB;
CREATE database departmentDB;

USE departmentDB;

CREATE TABLE department (
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
 );
 
 
DROP DATABASE IF EXISTS roleDB;
CREATE database roleDB;

USE roleDB;

CREATE TABLE role (
  id INTEGER AUTO_INCREMENT NOT NULL,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id)
);


DROP DATABASE IF EXISTS employeeDB;
CREATE database employeeDB;

USE employeeDB;

CREATE TABLE employee (
  id INTEGER AUTO_INCREMENT NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  role_id INT NOT NULL,
  manager_id INTEGER,
  PRIMARY KEY (id)
);
  

  

 
SELECT * FROM employee;
SELECT * FROM role;
SELECT * FROM department;