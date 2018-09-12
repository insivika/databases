
DROP DATABASE IF EXISTS `chat`;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INTEGER AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL DEFAULT 'NULL',
  PRIMARY KEY (`id`)
);


DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (

  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `user_id` INTEGER NOT NULL,
  `roomname` VARCHAR(255) NOT NULL,
  `text` MEDIUMTEXT NOT NULL,
  `created_at` TIMESTAMP NOT NULL  DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(`id`),
  FOREIGN KEY (`user_id`) REFERENCES users(`id`)

);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the commaexitnd line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

