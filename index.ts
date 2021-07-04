import { Intents } from "./deps.ts";
import { LuksBot } from "./bot.ts";
import config from "./config.ts";

if (import.meta.main) {
  const bot = new LuksBot();
  bot.connect(config.bot.token, Intents.None);
}
