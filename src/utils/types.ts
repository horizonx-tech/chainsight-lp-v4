export type Media = {
  media_key: string;
  type: 'photo' | 'video';
  url: string;
};

export type RawTweet = {
  id: string;
  text: string;
  created_at: string;
  attachments?: {
    media_keys: string[];
  };
};

export type TwitterApiResponse = {
  data: RawTweet[];
  includes?: {
    media?: Media[];
  };
};

export type Tweet = RawTweet & {
  media?: {
    type: 'photo' | 'video';
    url: string;
  }[];
};

