import { Connector, Database } from "../deps.ts";
import { PrivateChannel } from "./models/privatechannel.ts";

export abstract class DbContext {
  private readonly database: Database;

  constructor(connector: Connector) {
    this.database = new Database(connector);
    this.init(this.database);
  }

  abstract init(database: Database): void;
}

export class AppDbContext extends DbContext {
  constructor(connector: Connector) {
    super(connector);
  }

  init(database: Database): void {
    database.link([
      PrivateChannel,
    ]);

    database.sync({
      drop: true
    });
  }
}
