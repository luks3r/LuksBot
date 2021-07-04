import {
  Client,
  Interaction,
  ClientOptions,
  event,
  slash
} from "./deps.ts";

export interface LuksClientOptions extends ClientOptions {
  syncCommands?: boolean
}

export class LuksBot extends Client {

  constructor(options?: LuksClientOptions) {
    super(options);
  }

  @event()
  ready() {
    console.log("Ready!");
  }

  private syncCommands() {}

  @slash()
  async ping(d: Interaction) {
    await d.reply("Pong!");
  }
}

