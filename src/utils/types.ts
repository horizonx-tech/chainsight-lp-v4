export type Media = {
  media_key: string;
  type: 'photo' | 'video';
  url?: string;
  preview_image_url?: string;
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

export type Tweet = {
  id: string;
  created_at: string;
  text: string;
  edit_history_tweet_ids: string[];
  media?: {
    media_key: string;
    type: string;
    url?: string;
    preview_image_url?: string;
  }[];
};

