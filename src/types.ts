import {HttpContext, HttpHeaders, HttpParams} from "@angular/common/http";

export interface Options {
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
  permissions: string;
  features: string[];
}

export class Permission {
  static MANAGE_CHANNEL = BigInt(1) << BigInt(4)
  static MANAGE_SERVER = BigInt(1) << BigInt(5)
  static VIEW_AUDIT_LOGS = BigInt(1) << BigInt(7)
  static VIEW_CHANNEL = BigInt(1) << BigInt(10)
  static VIEW_GUILD_INSIGHTS = BigInt(1) << BigInt(19)
  static MANAGE_ROLES = BigInt(1) << BigInt(28)
  static MANAGE_PERMISSIONS = BigInt(1) << BigInt(28)
  static MANAGE_WEBHOOKS = BigInt(1) << BigInt(29)
  static MANAGE_EMOJIS_AND_STICKERS = BigInt(1) << BigInt(30)
  static MANAGE_GUILD_EXPRESSIONS = BigInt(1) << BigInt(30)
  static MANAGE_EVENTS = BigInt(1) << BigInt(33)
  static VIEW_CREATOR_MONETIZATION_ANALYTICS = BigInt(1) << BigInt(41)
  static CREATE_INSTANT_INVITE = BigInt(1) << BigInt(0)
  static KICK_MEMBERS = BigInt(1) << BigInt(1)
  static BAN_MEMBERS = BigInt(1) << BigInt(2)
  static NICKNAME_CHANGE = BigInt(1) << BigInt(26)
  static NICKNAME_MANAGE = BigInt(1) << BigInt(27)
  static MODERATE_MEMBERS = BigInt(1) << BigInt(40)
  static MESSAGE_ADD_REACTION = BigInt(1) << BigInt(6)
  static MESSAGE_SEND = BigInt(1) << BigInt(11)
  static MESSAGE_TTS = BigInt(1) << BigInt(12)
  static MESSAGE_MANAGE = BigInt(1) << BigInt(13)
  static MESSAGE_EMBED_LINKS = BigInt(1) << BigInt(14)
  static MESSAGE_ATTACH_FILES = BigInt(1) << BigInt(15)
  static MESSAGE_HISTORY = BigInt(1) << BigInt(16)
  static MESSAGE_MENTION_EVERYONE = BigInt(1) << BigInt(17)
  static MESSAGE_EXT_EMOJI = BigInt(1) << BigInt(18)
  static USE_APPLICATION_COMMANDS = BigInt(1) << BigInt(31)
  static MESSAGE_EXT_STICKER = BigInt(1) << BigInt(37)
  static MESSAGE_ATTACH_VOICE_MESSAGE = BigInt(1) << BigInt(46)
  static MANAGE_THREADS = BigInt(1) << BigInt(34)
  static CREATE_PUBLIC_THREADS = BigInt(1) << BigInt(35)
  static CREATE_PRIVATE_THREADS = BigInt(1) << BigInt(36)
  static MESSAGE_SEND_IN_THREADS = BigInt(1) << BigInt(38)
  static PRIORITY_SPEAKER = BigInt(1) << BigInt(8)
  static VOICE_STREAM = BigInt(1) << BigInt(9)
  static VOICE_CONNECT = BigInt(1) << BigInt(20)
  static VOICE_SPEAK = BigInt(1) << BigInt(21)
  static VOICE_MUTE_OTHERS = BigInt(1) << BigInt(22)
  static VOICE_DEAF_OTHERS = BigInt(1) << BigInt(23)
  static VOICE_MOVE_OTHERS = BigInt(1) << BigInt(24)
  static VOICE_USE_VAD = BigInt(1) << BigInt(25)
  static VOICE_START_ACTIVITIES = BigInt(1) << BigInt(39)
  static VOICE_USE_SOUNDBOARD = BigInt(1) << BigInt(42)
  static VOICE_USE_EXTERNAL_SOUNDS = BigInt(1) << BigInt(45)
  static VOICE_SET_STATUS = BigInt(1) << BigInt(48)
  static REQUEST_TO_SPEAK = BigInt(1) << BigInt(32)
  static ADMINISTRATOR = BigInt(1) << BigInt(3)
  static NONE = BigInt(0)
}
