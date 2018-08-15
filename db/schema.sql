### Schema

CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers
(
    create table burgers(
    id int auto_increment,
    burger_name varchar(100),
    devoured bool Default false,
    primary key (id)
);