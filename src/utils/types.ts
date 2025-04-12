export interface Media {
  media_key: string;
  type: 'photo' | 'video';
  url?: string;
  preview_image_url?: string;
}

export interface RawTweet {
  id: string;
  text: string;
  created_at: string;
  edit_history_tweet_ids: string[];
  attachments?: {
    media_keys: string[];
  };
}

export interface Tweet {
  id: string;
  text: string;
  created_at: string;
  edit_history_tweet_ids: string[];
  attachments?: {
    media: {
        media_key: string;
        type: string;
        url?: string;
        preview_image_url?:string
    }[];
}
}


