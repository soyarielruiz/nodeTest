-- Create database if exists
CREATE DATABASE IF NOT EXISTS fizzmod;

-- Using database
USE fizzmod;

-- Creating table blog
CREATE TABLE IF NOT EXISTS blog(
	id INT NOT NULL auto_increment PRIMARY KEY,
	title VARCHAR(100) NOT NULL,
	content VARCHAR(255) NOT NULL,
	date INT(11) NOT null
);

-- Insert data
INSERT INTO blog VALUES( 1, "Querty", "This is content querty", UNIX_TIMESTAMP(NOW()));
INSERT INTO blog VALUES( 2, "Testing", "This is content Testing", UNIX_TIMESTAMP(NOW()));
INSERT INTO blog VALUES( 3, "Fizzmod", "This is content Fizzmod", UNIX_TIMESTAMP(NOW()));
INSERT INTO blog VALUES( 4, "Blogging", "This is content Blogging", UNIX_TIMESTAMP(NOW()));