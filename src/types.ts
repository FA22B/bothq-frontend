import {HttpContext, HttpHeaders, HttpParams} from "@angular/common/http";

export interface Options{
  headers?: HttpHeaders | {
    [header: string]: string | string[];
  };
  observe?: 'body';
  context?: HttpContext;
  params?: HttpParams | {
    [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
  };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  transferCache?: {
    includeHeaders?: string[];
  } | boolean;
}

export interface UserInfo {
  id: number;
  name: string;
  email: string;
}

export interface DiscordGuild {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: Permission[];
  features: string[];
}

export enum Permission {
  MANAGE_CHANNEL = 4,
  MANAGE_SERVER = 5,
  VIEW_AUDIT_LOGS = 7,
  VIEW_CHANNEL = 10,
  VIEW_GUILD_INSIGHTS = 19,
  MANAGE_ROLES = 28,
  MANAGE_PERMISSIONS = 28,
  MANAGE_WEBHOOKS = 29,
  MANAGE_EMOJIS_AND_STICKERS = 30,
  MANAGE_GUILD_EXPRESSIONS = 30,
  MANAGE_EVENTS = 33,
  VIEW_CREATOR_MONETIZATION_ANALYTICS = 41,
  CREATE_INSTANT_INVITE = 0,
  KICK_MEMBERS = 1,
  BAN_MEMBERS = 2,
  NICKNAME_CHANGE = 26,
  NICKNAME_MANAGE = 27,
  MODERATE_MEMBERS = 40,
  MESSAGE_ADD_REACTION = 6,
  MESSAGE_SEND = 11,
  MESSAGE_TTS = 12,
  MESSAGE_MANAGE = 13,
  MESSAGE_EMBED_LINKS = 14,
  MESSAGE_ATTACH_FILES = 15,
  MESSAGE_HISTORY = 16,
  MESSAGE_MENTION_EVERYONE = 17,
  MESSAGE_EXT_EMOJI = 18,
  USE_APPLICATION_COMMANDS = 31,
  MESSAGE_EXT_STICKER = 37,
  MESSAGE_ATTACH_VOICE_MESSAGE = 46,
  MANAGE_THREADS = 34,
  CREATE_PUBLIC_THREADS = 35,
  CREATE_PRIVATE_THREADS = 36,
  MESSAGE_SEND_IN_THREADS = 38,
  PRIORITY_SPEAKER = 8,
  VOICE_STREAM = 9,
  VOICE_CONNECT = 20,
  VOICE_SPEAK = 21,
  VOICE_MUTE_OTHERS = 22,
  VOICE_DEAF_OTHERS = 23,
  VOICE_MOVE_OTHERS = 24,
  VOICE_USE_VAD = 25,
  VOICE_START_ACTIVITIES = 39,
  VOICE_USE_SOUNDBOARD = 42,
  VOICE_USE_EXTERNAL_SOUNDS = 45,
  VOICE_SET_STATUS = 48,
  REQUEST_TO_SPEAK = 32,
  ADMINISTRATOR = 3,
  UNKNOWN = -1
}
