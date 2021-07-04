import {
  SlashCommandPartial,
  SlashCommandOptionType
} from "../deps.ts"

export const voiceCommand: SlashCommandPartial = {
  name: "voice",
  description: "Manage temporary channels",
  options: [
    {
      name: "hide",
      description: "Hide channel from anyone unless allowed",
      type: SlashCommandOptionType.SUB_COMMAND
    },
    {
      name: "show",
      description: "Show channel to anyone unless banned",
      type: SlashCommandOptionType.SUB_COMMAND
    },
    {
      name: "blacklist",
      description: "Manage channel's blacklist",
      type: SlashCommandOptionType.SUB_COMMAND,
      options: [
        {
          name: "add",
          description: "User to ban",
          type: SlashCommandOptionType.SUB_COMMAND
        },
        {
          name: "remove",
          description: "User to unban",
          type: SlashCommandOptionType.SUB_COMMAND
        }
      ]
    },
    {
      name: "whitelist",
      description: "Manage channel's whitelist",
      type: SlashCommandOptionType.SUB_COMMAND,
      options: [
        {
          name: "add",
          description: "Add user to whitelist",
          type: SlashCommandOptionType.SUB_COMMAND,
          options: []
        },
        {
          name: "remove",
          description: "Remove user from whitelist",
          type: SlashCommandOptionType.SUB_COMMAND
        }
      ]
    }
  ]
};