DROP TABLE movies;
DROP TABLE people;

CREATE TABLE movies (
	id SERIAL8 PRIMARY KEY,
	title VARCHAR(255),
	year INT2,
	show_time VARCHAR(255)
);

CREATE TABLE people (
	id SERIAL8 PRIMARY KEY,
	name VARCHAR(255)
);

INSERT INTO people (name) VALUES ('Faisal Ali');
INSERT INTO people (name) VALUES ('Samantha Campbell');
INSERT INTO people (name) VALUES ('Jasmse Cox');
INSERT INTO people (name) VALUES ('Upul Dissanayaka');
INSERT INTO people (name) VALUES ('Martin Eguizabel');
INSERT INTO people (name) VALUES ('Pedro Everett');
INSERT INTO people (name) VALUES ('Filipe Granha');
INSERT INTO people (name) VALUES ('Winston Ingram');
INSERT INTO people (name) VALUES ('Fred');
INSERT INTO people (name) VALUES ('Reece Jones');
INSERT INTO people (name) VALUES ('Eugene Kim');
INSERT INTO people (name) VALUES ('Steven MacDonald');
INSERT INTO people (name) VALUES ('Fred');
INSERT INTO people (name) VALUES ('Jamie Martin');
INSERT INTO people (name) VALUES ('Ciaran McKenna');
INSERT INTO people (name) VALUES ('Ross Murray');
INSERT INTO people (name) VALUES ('Victoria Plows');
INSERT INTO people (name) VALUES ('Finn Porter');
INSERT INTO people (name) VALUES ('Tom Roddick');
INSERT INTO people (name) VALUES ('Alan White');
INSERT INTO people (name) VALUES ('Glen Young');

INSERT INTO movies (title, year, show_time) VALUES ('Iron Man', 2008, '17:55');
INSERT INTO movies (title, year, show_time) VALUES ('The Incredible Hulk', 2008, '17:55');
INSERT INTO movies (title, year, show_time) VALUES ('Iron Man 2', 2010, '17:10');
INSERT INTO movies (title, year, show_time) VALUES ('Thor', 2011, '19:30');
INSERT INTO movies (title, year, show_time) VALUES ('Captain America: The First Avenger', 2011, '18:50');
INSERT INTO movies (title, year, show_time) VALUES ('Avengers Assemble', 2012, '19:05');
INSERT INTO movies (title, year, show_time) VALUES ('Iron Man 3', 2013, '22:10');
INSERT INTO movies (title, year, show_time) VALUES ('Thor: The Dark World', 2013, '23:30');
INSERT INTO movies (title, year, show_time) VALUES ('Batman Begins', 2005, '23:30');
INSERT INTO movies (title, year, show_time) VALUES ('Captain America: The Winter Soldier', 2014, '14:55');
INSERT INTO movies (title, year, show_time) VALUES ('Guardians of the Galaxy', 2014, '19:05');
INSERT INTO movies (title, year, show_time) VALUES ('Avengers: Age of Ultron', 2015, '14:35');
INSERT INTO movies (title, year, show_time) VALUES ('Ant-Man', 2015, '19:15');
INSERT INTO movies (title, year, show_time) VALUES ('Captain America: Civil War', 2016, '12:35');
INSERT INTO movies (title, year, show_time) VALUES ('Doctor Strange', 2016, '21:30');