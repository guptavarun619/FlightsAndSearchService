#Flight Management System

## Project Setup

- clone the project on local machine
- Execute `npm install` in the same path of the project
- Create `.env` file in the root directory and add the following environment varaible
  - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <DB_USERNAME>,
    "password": <DB_PASSWORD>,
    "database": (DB_NAME : "Flight_Manager"),
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
<<<<<<< HEAD

- Once you've aded your db config as listed above, go to src folder from your terminal and execute `npx sequelize db:create`
=======
>>>>>>> 5a568cefe99edba1da5e9de3ecd6307e5c8050e3
