CREATE DATABASE flowersdb;

USE flowersdb;

CREATE TABLE flowers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  color VARCHAR(50) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  imageurl VARCHAR(255),
  likes INT DEFAULT 0
);

INSERT INTO flowers (name, color, price, imageurl, likes) VALUES
('Rose', 'Red', 10, '/images/rose.jpg', 4500),
('Jasmine', 'White', 12, '/images/jasmine.jpg', 3000),
('Lavender', 'Purple', 18, '/images/lavender.jpg', 2700),
('Lily', 'White', 15, '/images/lily.jpg', 3200),
('Daisy', 'Yellow', 8, '/images/daisy.jpg', 2100),
('Sunflower', 'Yellow', 14, '/images/sunflower.jpg', 4000),
('Tulip', 'Pink', 16, '/images/tulip.jpg', 2800),
('Orchid', 'Purple', 25, '/images/orchid.jpg', 3500),
('Marigold', 'Orange', 9, '/images/marigold.jpg', 1900),
('Lotus', 'Pink', 20, '/images/lotus.jpg', 5000);