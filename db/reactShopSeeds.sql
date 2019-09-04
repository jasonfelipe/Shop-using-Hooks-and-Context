DROP DATABASE IF EXISTS reactshop_db;

create database reactshop_db; 

-- USE reactshop_db;

-- create table Users (
-- 	id int auto_increment not null,
-- 	firstname varchar(100) not null,
--     lastname varchar(100) not null,
--     username varchar(100) not null,
--     email varchar(255) not null,
--     password varchar(100) not null,
--     favProducts varchar (255), 
--     createdAt DATETIME not null,
--     updatedAt DATETIME not null,
--     primary key(id)
--     );
    
-- create table Products (
-- 	id int auto_increment not null,
--     name varchar(100) not null,
--     quantity int not null,
--     price int not null,
--     createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
--     updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
--     primary key (id)
-- );

use reactshop_db;

insert into products(name, quantity, price) values ('Chocolate bar', 100, 10.00), ('Laptop', 1000, 100.00), ('iPhone', 500, 700.00), ('Twix', 1000, 2.00), ('Skittles', 1000, 1.00), ('M&Ms' , 1000, 1.50);


