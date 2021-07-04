import { BaseRepository } from "./repository.ts";
import { PrivateChannel } from "../models/privatechannel.ts";
import { AppDbContext } from "../context.ts";

export class PrivateChannelRepository
  extends BaseRepository<PrivateChannel, number, AppDbContext> {
}
