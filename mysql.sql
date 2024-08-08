create table user (
    id INTEGER UNIQUE NOT NULL AUTO_INCREMENT,
    name VARCHAR(50),
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE
);

Insert into user (name,username,email) 
VALUES ("Feruzbek","Afruz","feruzbek@gmail.com");