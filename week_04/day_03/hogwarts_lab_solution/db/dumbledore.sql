DROP TABLE students;
DROP TABLE houses;

CREATE TABLE students (
  id SERIAL8 primary key,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  house VARCHAR(255),
  age INT4
);

CREATE TABLE houses (
  id SERIAL8 primary key,
  name VARCHAR(255)
);

ALTER TABLE students ADD house_id INT8 references houses(id);
ALTER TABLE students DROP COLUMN house;