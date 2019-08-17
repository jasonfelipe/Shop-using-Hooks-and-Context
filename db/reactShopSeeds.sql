DROP DATABASE IF EXISTS reactShop_db;

create database reactShop_db; 

USE reactShop_db;

create table Users (
	id int auto_increment not null,
	firstname varchar(100) not null,
    lastname varchar(100) not null,
    username varchar(100) not null,
    email varchar(255) not null,
    password varchar(100) not null,
    primary key(id)
    );
    
create table Products (
	id int auto_increment not null,
    name varchar(100) not null,
    quantity int not null,
    price int not null,
    primary key (id)
);

use reactshop_db;

insert into products(name, quantity, price) values ('Chocolate bar', 100, 10.00), ('Laptop', 1000, 100.00), ('iPhone', 500, 700.00);
    


