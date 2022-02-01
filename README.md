# E-commerce Backend: Diagon Alley 
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
:mage-woman:

## Description
The shopkeepers of Diagon Alley have come together to serve the global wizarding community via an e-commerce website. They have asked for muggle expertise on implementing a backend that uses the latest technologies so that they can compete with other online vendors of magical wares.
## Usage
1. Add an environment variable file (.env) to the project folder. It should look like the following snippet:
```
DB_NAME='ecommerce_db'
DB_USER='your-mysql-username'
DB_PW='your-mysql-password'
```
2. Run the following command from the terminal in the root of the project folder:
```
mysql -u <username> -p
```
Enter your password for mysql. In the mysql shell, type the following command:
```
source db/schema.sql
```
Then type
```
exit
```
3. Run the following command from the terminal in the root of the project folder (not in mysql shell):
```
npm run seed
```
This will seed the database with initial data.
4. Start the server by typing the following command:
```
npm start
```
5. You may use Insomnia to test all CRUD operations on this database (GET, POST, PUT, DELETE). All results will display in JSON.

## Walkthrough Video
[Welcome to Diagon Alley](https://watch.screencastify.com/v/Bz9HTbbbjBezc4AsTkBh)