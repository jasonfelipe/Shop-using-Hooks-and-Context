DROP DATABASE IF EXISTS storefrontreact;

create database storefrontreact; 

USE storefrontreact;

create table Users (
	id int auto_increment not null,
	firstName varchar(100) not null,
    lastName varchar(100) not null,
    userName varchar(100) not null,
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
    