import * as assert from "assert";
import { createConnection, Connection, getRepository } from "typeorm";


import "reflect-metadata";

describe('Waiter-Webbapp-Function', function () {

  let connection: Connection;

  before(async function () {

    try {
      let connectionUrl = process.env.DB || "postgresql://coder:1234@localhost:5432/waiter_webapp_test"
      connection = await createConnection({
        "name": "default",
        "type": "postgres",
        "url": connectionUrl,
        "synchronize": true,
        "logging": false,

        "entities": [
          "src/entity/**/*.ts"
        ],
        "migrations": [
          "src/migration/**/*.ts"
        ],
        "subscribers": [
          "src/subscriber/**/*.ts"
        ],
        "cli": {
          "entitiesDir": "src/entity",
          "migrationsDir": "src/migration",
          "subscribersDir": "src/subscriber"
        }
      });

    }
    catch (err) {
      console.log(err);
    }


  });

  beforeEach(async function () {

  })

  after(async function () {
    connection.close();
  })

  it('should do something', function(){

  })

})