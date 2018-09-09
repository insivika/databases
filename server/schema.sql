
DROP DATABASE IF EXISTS `chat`;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (

  `id` INTEGER AUTO_INCREMENT NOT NULL, 
  `username` VARCHAR(255) NOT NULL, 
  `roomname` VARCHAR(255) NOT NULL, 
  `body` MEDIUMTEXT NOT NULL, 
  `created_at` TIMESTAMP NOT NULL  DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(`id`)
       
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the commaexitnd line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

