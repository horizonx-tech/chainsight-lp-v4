import { useEffect, useState,useRef } from "react";
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import { handleBackward, handleForward, calculateTotalShift,  handleTouchEnd, handleTouchMove, handleTouchStart} from "../../utils/functionalities";
import { motion } from "framer-motion";
import { Tweet } from "../../utils/types";
import { decodeHtml } from "../../utils/text";

const Updates = () => {
  const [slidePosition, setSlidePosition] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const handleResize = () => {
      if (containerRef.current && cardRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const cardWidth = cardRef.current.offsetWidth;
        const computedStyle = window.getComputedStyle(containerRef.current.querySelector('div')!);
        const gapSize = parseFloat(computedStyle.gap) || 0;
        const effectiveCardWidth = cardWidth + gapSize;
        const calculatedVisibleCards = containerWidth / effectiveCardWidth;
        setVisibleCards(calculatedVisibleCards);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  })

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const res = await fetch("/api/x/posts");
        const result: Tweet[] = await res.json();
        // const result: Tweet[] = [
        //   {
        //     "created_at": "2025-04-23T17:45:24.000Z",
        //     "edit_history_tweet_ids": ["1915099702414209034"],
        //     "text": "@chainlink @PythNetwork Check out our docs to learn more: https://t.co/EflGLMW1qJ",
        //     "id": "1915099702414209034"
        //   },
        //   {
        //     "created_at": "2025-04-23T17:45:21.000Z",
        //     "edit_history_tweet_ids": ["1915099689881641275"],
        //     "text": "Not just another feed.\n\nChainSight’s MultiOracle Aggregator:\n\n– Runs on-chain\n– Applies timestamp-based weighting\n– Uses a dynamic weighted mean for accuracy\n\nThe First MultiOracle Price Feed: One Feed to Rule Them All. ✨ https://t.co/faqFVjiNMg",
        //     "id": "1915099689881641275",
        //     "attachments": {
        //       "media": [
        //         {
        //           "media_key": "3_1915099687662821376",
        //           "type": "photo",
        //           "url": "https://pbs.twimg.com/media/GpPNBPCaoAA3i3B.jpg"
        //         }
        //       ]
        //     }
        //   },
        //   {
        //     "created_at": "2025-04-23T15:44:40.000Z",
        //     "edit_history_tweet_ids": ["1915069317244178685"],
        //     "text": "Join in 15 mins: The Golden Hour live ✨ https://t.co/JUxCStlGzO",
        //     "id": "1915069317244178685"
        //   },
        //   {
        //     "created_at": "2025-04-23T04:00:01.000Z",
        //     "edit_history_tweet_ids": ["1914891988161458194"],
        //     "text": "Wen @Solana?\n\nSoon…\n\nhttps://t.co/T4edMyuwKF https://t.co/l39bDCWIAc",
        //     "id": "1914891988161458194"
        //   },
        //   {
        //     "created_at": "2025-04-22T14:00:21.000Z",
        //     "edit_history_tweet_ids": ["1914680676668059755"],
        //     "text": "ChainSight’s real-time feeds & analytics will provide TwinFinance users with enhanced accurate, reliable data.\n\nFollow us and @TwinFinance for updates as we redefine the future of DeFi!\n\n(3/3)",
        //     "id": "1914680676668059755"
        //   }
        // ];
        setTweets(result);
      } catch (err) {
        console.error("Error fetching tweets:", err);
      }
    };

    fetchTweets();
  }, []);

  const maxLength = tweets.length-1;
  const totalShift = calculateTotalShift(visibleCards, maxLength);
  const linkifyText = (text: string) => {
    return text.split(' ').map((word, i) => {
      if (word.startsWith('https://')) {
        return (
          <a
            key={i}
            href={word}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline break-words"
          >
            {word}
          </a>
        );
      }
      return <span key={i}>{decodeHtml(word)} </span>;
    });
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-[#09090B] max-w-[95vw] md:max-w-[80vw] xl:max-w-screen-lg rounded-xl">
        <div className="flex flex-col items-center gap-4 w-full p-5">
          <div className="flex justify-between items-center w-full">
            <h2 className="text-2xl text-[#FAFAFA]">Our Updates</h2>
            <div className="flex gap-3 w-[20%] md:w-[10%] mt-2">
              <div
                className={`w-12 h-6 md:w-7 md:h-6 flex rounded-sm hover:bg-[#3f3f46] items-center justify-center bg-[#27272A] cursor-pointer ${slidePosition !== 0 ? 'opacity-100' : 'opacity-50'}`}
                onClick={() => handleBackward({ setSlidePosition, visibleCards })}
              >
                <IoArrowBackSharp size={14} />
              </div>
              <div
                className={`w-12 h-6 md:w-7 md:h-6 flex rounded-sm items-center justify-center bg-[#27272A] cursor-pointer hover:bg-[#3f3f46] ${slidePosition > -totalShift ? 'opacity-100' : 'opacity-50'}`}
                onClick={() => handleForward({ setSlidePosition, maxLength, visibleCards })}
              >
                <IoMdArrowRoundForward size={14} />
              </div>
            </div>
          </div>

          <div className="w-full overflow-hidden" ref={containerRef}>
            <motion.div
              className="flex gap-4 w-full"
              animate={{ x: `${slidePosition}%` }}
              transition={{ duration: 1 }}
              onTouchStart={handleTouchStart(setTouchStartX,setTouchEndX)}
              onTouchMove={handleTouchMove(setTouchEndX)}
              onTouchEnd={handleTouchEnd({ touchStartX, touchEndX, setSlidePosition, maxLength, visibleCards })}
            >
              {tweets.filter((tweet) => {
                const trimmedText = tweet.text.trim();
                const isOnlyLink = /^https:\/\/t\.co\/\w+$/.test(trimmedText);
                const hasMedia = tweet.attachments?.media?.length && tweet.attachments.media.length > 0;
                return !isOnlyLink || hasMedia;
              }).map((tweet, index) => (
                <div
                  key={tweet.id}
                  onClick={()=>window.open(`https://x.com/ChainSight_/status/${tweet.id}`, "_blank")}
                  ref={index==0?cardRef:null}
                  rel="noopener noreferrer"
                  className="min-w-[300px] p-4 bg-[#010101] rounded-md flex flex-col justify-between h-auto text-sm hover:bg-[#1a1a1a] transition-colors duration-200"
                  style={{
                    fontFamily:
                      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
                    color: '#e7e9ea',
                  }}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-2 items-start mb-2">
                      <img src="/chainsight.jpg" alt="ChainSight Logo" width="36" height="32" className="w-9 h-8 rounded" />
                      <div className="flex flex-col">
                        <span className="text-white font-semibold leading-tight">ChainSight ✨</span>
                        <span className="text-gray-400 text-[11px]">@ChainSight_</span>
                      </div>
                    </div>

                    <p className="text-sm leading-snug mb-2 text-justify">
                      {linkifyText(tweet.text)}
                    </p>

                    {tweet.attachments?.media?.map((m, i) => {
                      if (m.type === "photo" && (m.url || m.preview_image_url)) {
                        return (
                          <img
                            key={i}
                            src={m.url || m.preview_image_url}
                            alt="tweet media"
                            className="rounded w-full aspect-[16/9] object-cover mt-2"
                          />
                        );
                      } else if (m.type === "video" && m.url) {
                        return (
                          <video key={i} controls className="rounded mt-2 aspect-[16/9] w-full">
                            <source src={m.url} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        );
                      }
                      return null;
                    })}
                  </div>
                  <span className="text-gray-400 text-[11px] mt-2 text-justify">{new Date(tweet.created_at).toLocaleString()}</span>
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

