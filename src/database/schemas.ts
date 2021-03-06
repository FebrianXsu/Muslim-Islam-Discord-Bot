export interface ClientSchema {
  /** The bot id */
  id: string;
}

export interface GuildSchema {
  /** The guild id */
  id: string;
  /** The custom prefix for this guild */
  prefix: string;
  /** The language for this guild */
  language: string;
  finishMonthlyUserIDs?: string[];
  finishMonthlyChannelID: string;
}

export interface UserSchema {
  /** The user id who created this emoji */
  id: string;
  finishMonthlyEnabled: boolean;
  finishMonthlyVerse: number;
}
