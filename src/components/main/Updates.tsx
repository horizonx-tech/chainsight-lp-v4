import { useEffect, useState } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import { handleBackward, handleForward } from '../../utils/functionalities';
import { motion } from "framer-motion";
import { mockTweets } from '../../constants/mockTweets';
import { TwitterApiResponse, Tweet} from "../../utils/types"

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
        const cachedData = localStorage.getItem("cachedTweets");
        const cachedTime = localStorage.getItem("cachedTweetsTime");
        const now = new Date().getTime();
        if (cachedData && cachedTime && now - parseInt(cachedTime) < 24 * 60 * 60 * 1000) {
          const parsedData: Tweet[] = JSON.parse(cachedData);
          setTweets(parsedData);
          return;
        }
        const res = await fetch("https://chainsight-lp-v4.vercel.app/api/x/posts");
        const result: TwitterApiResponse = await res.json();
        const tweets = result.data;
        const media = result.includes?.media || [];
  
        const enrichedTweets: Tweet[] = tweets.map((tweet) => {
          const mediaKeys = tweet.attachments?.media_keys || [];
          const attachedMedia = media.filter((m) => mediaKeys.includes(m.media_key));
          return {
            ...tweet,
            media: attachedMedia.map((m) => ({
              type: m.type,
              url: m.url,
            })),
          };
        });
        localStorage.setItem("cachedTweets", JSON.stringify(enrichedTweets));
        localStorage.setItem("cachedTweetsTime", now.toString());
        setTweets(enrichedTweets);
      } catch (err) {
        console.error("Error fetching tweets:", err);
        setTweets(mockTweets);
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
                    {tweet.media && tweet.media.map((m, i) => (
                        m.type === "photo" ? (
                          <img key={i} src={m.url} alt="tweet media" className="rounded w-30 h-30 mt-2" />
                        ) : m.type === "video" ? (
                          <video key={i} controls className="rounded mt-2">
                            <source src={m.url} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : null
                    ))}
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
