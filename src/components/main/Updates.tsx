import { useEffect, useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import { handleBackward, handleForward } from '../../utils/functionalities';
import { motion } from "framer-motion";
import { Tweet, TwitterApiResponse, Media, RawTweet } from "../../utils/types";
const Updates = () => {
  const [slidePosition, setSlidePosition] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [tweets, setTweets] = useState<Tweet[]>([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(2);
      else if (window.innerWidth < 2000) setVisibleCards(4);
      else setVisibleCards(5);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  

useEffect(() => {
  const fetchTweets = async () => {
    try {
      // const res = await fetch("https://your-api-url.com/api/x/posts");
      // const result: TwitterApiResponse = await res.json();

      // For now using mocked inline data with the expected structure:
      const result: TwitterApiResponse = {
        data: [
          {
            id: "1910458394034524257",
            text: "Our MultiOracle Aggregator is also tariff free✨ https://t.co/1X3JYARfJO",
            created_at: "2025-04-10T22:22:30.000Z",
            attachments: {
              media_keys: ["13_1910458297536090112"]
            }
          },
          {
            id: "1910325648981188793",
            text: "No tariffs on Portal V1. ✨ https://t.co/T333KJbk2L",
            created_at: "2025-04-10T13:35:01.000Z"
          }
        ],
        includes: {
          media: [
            {
              media_key: "13_1910458297536090112",
              type: "video",
              preview_image_url: "https://pbs.twimg.com/amplify_video_thumb/1910458297536090112/img/bDrrUKJ_VdTlBgW-.jpg"
            }
          ]
        }
      };

      const mediaMap = new Map<string, Media>();
      result.includes?.media?.forEach((m) => {
        mediaMap.set(m.media_key, m);
      });

      const normalizedTweets: Tweet[] = result.data.map((tweet: RawTweet) => {
        const media = tweet.attachments?.media_keys
          ?.map((key) => mediaMap.get(key))
          .filter((m): m is Media => !!m);

        return {
          id: tweet.id,
          created_at: tweet.created_at,
          text: tweet.text,
          edit_history_tweet_ids: [], 
          media
        };
      });

      setTweets(normalizedTweets);
    } catch (err) {
      console.error("Error fetching tweets:", err);
      // setTweets(mockTweets); // fallback
    }
  };

  fetchTweets();
}, []);

  const maxLength = tweets.length - 1;

  return (
    <div className="flex items-center justify-center">
      <div className="bg-[#09090B] max-w-[95vw] md:max-w-[80vw] xl:max-w-screen-lg rounded-xl">
        <div className="flex flex-col items-center gap-4 w-full p-5">
          <div className="flex justify-between items-center w-full">
            <h2 className="text-2xl text-[#FAFAFA]">Our Updates</h2>
            <div className='flex gap-3 w-[20%] md:w-[10%] mt-2'>
              <div
                className={`w-12 h-6 md:w-7 md:h-6 flex rounded-sm items-center justify-center bg-[#27272A] cursor-pointer hover:bg-[#3f3f46] ${slidePosition >= 0 ? 'opacity-50' : 'opacity-100'}`}
                onClick={() => handleBackward({ setSlidePosition, visibleCards })}
              >
                <IoArrowBackSharp size={14} />
              </div>
              <div
                className={`w-12 h-6 md:w-7 md:h-6 flex rounded-sm items-center justify-center bg-[#27272A] cursor-pointer hover:bg-[#3f3f46] ${slidePosition > -(tweets.length * 5) ? 'opacity-50' : 'opacity-100'}`}
                onClick={() => handleForward({ setSlidePosition, maxLength, visibleCards })}
              >
                <IoMdArrowRoundForward size={14} />
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden">
            <motion.div
              className='flex gap-4 w-full'
              animate={{ x: `${slidePosition}%` }}
              transition={{ duration: 1 }}
              style={{ width: `${(tweets.length / visibleCards) * 100}%` }}
            >
              {tweets.map((tweet) => (
                <div
                  key={tweet.id}
                  className="min-w-[300px] p-4 bg-[#010101] rounded-md flex flex-col justify-around h-auto text-sm"
                  style={{
                    fontFamily:
                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                    color: '#e7e9ea',
                  }}
                >
                  <div>
                    <div className="flex gap-2 items-center mb-2">
                      <img src="/chainsight.jpg" alt="ChainSight Logo" className="w-10 h-7 rounded" />
                      <div className="flex flex-col">
                        <span className="text-white font-semibold leading-tight">
                          ChainSight ✨ 
                        </span>
                        <span className="text-gray-400 text-[11px] ">
                          @ChainSight_
                        </span>
                      </div>
                    </div>
                    <p className="text-sm leading-snug mb-2">{tweet.text}</p>
                    {tweet.media?.map((m, i) => {
                      if (m.type === "photo" && m.url) {
                        return <img key={i} src={m.url} alt="tweet media" className="rounded w-30 h-30 mt-2" />;
                      } else if (m.type === "video" && m.url) {
                        return (
                          <video key={i} controls className="rounded mt-2">
                            <source src={m.url} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        );
                      }
                      return null;
                    })}

                  </div>
                  <span className="text-gray-400 text-[11px] mt-2">{new Date(tweet.created_at).toLocaleString()}</span> 
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
