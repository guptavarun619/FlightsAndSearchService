# Flight Management System

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

- Once you've aded your db config as listed above, go to `src` folder from your terminal and execute `npx sequelize db:create` and then execute
  `npx sequelize db:migrate`

## DB Design

    - Airplane Table
    - Flight
    - Airport
    - City

    - A 'flight' belongs to an 'airplane' but one 'airplane' can be used in mulitple 'flight'.
    - A 'city' has many 'airport' but one 'airport' belongs to one 'city'.
    - One 'airport' can have many 'flight', but a 'flight' belongs to one 'airport'.

## Tables

### City -> id, name, created_at, updated_at

### Airport -> id, name, address, city_id(FK), created_at, updated_id

    Relationship -> [Airport M:1 City] City has many airports and Airport belongs to 1 city (one to many)
