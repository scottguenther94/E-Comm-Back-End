# E-Commerce Back End
            
## About
a back end for an e-commerce website that uses Express.js API and Sequelize to interact with a MySQL database

## Table of Contents
* [Installation](#installation)
* [How to Use](#usage)
* [Link to Videos](#videos)
            
## Installation
First, install MySQL2 and Sequelize packages Express.js API to use Sequelize to interact with the MySQL database and the dotenv package to use environment variables to store sensitive data. You will also need to create a .env file, define DB_NAME = ecommerce_db which is the name of the database, define DB_USER with your MySQL username or root, and define DB_PW with your MySQL password. 

First, make sure your connection to the database is secure by ensuring your user info is correct in the .env file. This will include your MySQL username, password, host, and the name of the database. You'll want to be sure you have access to MySQL2 and Sequelize in order to interact with the database. 
            
## Usage
Use the schema.sql file in the db folder to create your database with MySQL shell commands. Enter npm run seed to seed data to your database with sample data.

First run the schema.sql file to generate the database. Enter "npm run seed" to populate the database. Finally, enter "npm start" to interact with the data on Insomnia. 

## Videos
This link leads to a folder with 2 videos. The first shows how to setup the database and the local host. The second video shows all of the CRUD operations possible in Insomnia. 

https://drive.google.com/drive/folders/1yFZrb7LgfxE7oB-na6nTkjAsdiEcEROq?usp=sharing
            