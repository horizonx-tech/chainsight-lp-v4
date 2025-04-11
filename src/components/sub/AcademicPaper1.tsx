export default function AcademicPaper1() {
  return (
    <div className="max-w-4xl mx-auto my-10 p-8 text-white font-serif">
      {/* Paper Title */}
      <h1 className="text-2xl font-bold text-center mb-6">Which altcoins should Bitcoiners have owned?</h1>
      
      {/* Authors */}
      <div className="text-center mb-8">
        <p className="mb-4">
          Shumpei Koike<sup>*</sup>, Tatsuyoshi Okimoto<sup>†</sup>, and Toyotaka Sakai<sup>‡</sup>
        </p>
        <p className="italic">September 6, 2024</p>
      </div>

      {/* Abstract */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">Abstract</h2>
        <p className="mb-4">
          We analyze coins that are suitable for holding in combination with Bitcoin from the
          perspective of portfolio management. We design a test to determine whether a coin
          is compatible with Bitcoin using a new evaluation score based on the Sharpe ratio.
          During our data measurement period, PENDLE, BGB, AKT, LEO, ANT, and WBTC
          pass this test.
        </p>
        <p className="mb-4">
          <span className="font-bold">Keywords:</span> Bitcoin, Sharpe ratio, Optimal portfolio, Cryptocurrency.
        </p>
        <p>
          <span className="font-bold">JEL Codes:</span> G0, D7, D6.
        </p>
      </div>

      {/* Section 1: Introduction */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">1 Introduction</h2>
        <p className="mb-4">
          A bitcoiner is a believer who only recognizes the value of Bitcoin, the first cryptocurrency
          that has opened up the era of crypto assets (Nakamoto 2008). Some of bitcoiners even
          look down on Ethereum, and it seems that they don't even recognize the existence of other
          cryptocurrencies, so-called altcoins. We fully admit that Bitcoin has great significance
          and is a celebrated invention. However, we also see significance and appeal in a number
          of interesting altcoins, and we would like bitcoiners to share this view with us. For this
          purpose, we try to find altcoins that bitcoiners should have included in their portfolios.
          One might think that it is unnecessary meddling. That may be true, but anyway we do it.
        </p>
        <p className="mb-4">
          In this study, we use time-series data to analyze which altcoins bitcoiners should have
          held together with bitcoin for portfolio management. Compared to Bitcoin, altcoins are
          risky assets with more volatile prices. Therefore, it is necessary to consider not only the
          return but also risk. From this perspective, we design a new index that evaluates Bitcoin-
          paired portfolios with reference to the Sharpe ratio, an index that measures the excess
          return per risk unit (Sharpe 1966).
        </p>
        <p className="mb-4">
          Our idea is as follows. Consider a portfolio that combines an altcoin c with bitcoin. The
          weights of them are chosen so that the Sharpe ratio of the portfolio is maximized.
          <sup>1</sup> Then how much higher is the Sharpe ratio in this case than the Sharpe ratio when only Bitcoin is
          held? The difference between the two values represents the excess return per risk unit that
          results from successfully incorporating the coin into the portfolio. We call this difference a
          score. A score of zero means that there is no advantage to holding the coin in the portfolio
          over just holding Bitcoin. In fact, it is well known that Bitcoin has high returns and relative
          price stability among the class of cryptocurrencies. Additionally, the returns of many other
          cryptocurrencies are typically highly correlated with the return of Bitcoin. Therefore, the
          score can easily become zero. Then our test for coins is to achieve positive scores in the
          long term. In our data analysis, we found that only a very small number of coins passed
          this test. They are PENDLE, AKT, LEO, BGB, ANT, and WBTC.
        </p>
        <p className="text-sm italic mb-4">
          <sup>1</sup> This portfolio with the maximum Sharpe ratio would be the optimal risky portfolio for an investor
          considering an asset allocation problem with Bitcoin, an altcoin, and a risk-free asset, assuming they have
          mean-variance utility.
        </p>
      </div>

      {/* Section 2: Improvement score of the Sharpe ratio */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">2 Improvement score of the Sharpe ratio</h2>
        <p className="mb-4">
          Let C ≡ {'{b, c<sub>1</sub>, c<sub>2</sub>, ..., c<sub>K</sub>}'} be the set of coins, where b denotes Bitcoin and any c<sub>k</sub> denotes
          some other coin. The USD price of one unit of c ∈ C at time period t is denoted by
          p(c, t) &gt; 0.
        </p>
        <p className="mb-4">
          Let T ≡ {'{0, 1, 2, ..., τ}'} be the set of time periods. The return of c ∈ C in t ∈ T is
        </p>
        <div className="flex justify-center my-4">
          <div>
            r(c, t) ≡ <div className="border-b border-black text-center">p(c, t) − p(c, t − 1)</div>
            <div className="text-center">p(c, t − 1)</div>
          </div>
          <div className="ml-2">(1)</div>
        </div>
        <p className="mb-4">
          A Bitcoin-paired portfolio, or simply a portfolio, is (c, w) ∈ C × [0, 1], where c ∈ C is
          a coin held together with Bitcoin and w ∈ [0, 1] is a weight on c. The return of portfolio
          (c, w) in t ∈ T is
        </p>
        <div className="flex items-center my-4 justify-center">
          <div>r(c, w, t) ≡ w · r(c, t) + (1 − w) · r(b, t).</div>
          <div className="ml-2">(2)</div>
        </div>
        <p className="mb-4">
          Note that r(b, w, t) = r(b, t) for all w ∈ [0, 1] and t ∈ T.
        </p>
        <p className="mb-4">
          The excess return of (c, w) in t ∈ T is
        </p>
        <div className="flex items-center my-4 justify-center">
          <div>er(c, w, t) ≡ r(c, w, t) − free(t),</div>
          <div className="ml-2">(3)</div>
        </div>
        <p className="mb-4">
          where free(t) ≥ 0 denotes an exogenously given return of a risk-free asset. The standard
          deviation of the excess return of (c, w) in T is
        </p>
        <div className="flex justify-center my-4">
          <div>
            sd(c, w, T) ≡ 
            <div className="flex flex-col items-center">
              <div className="border-b border-black">
                <div className="flex items-center">
                  <div>∑</div>
                  <div className="ml-1">t∈T</div>
                </div>
                <div>[er(c, w, t) − ēr(c, w, T)]<sup>2</sup></div>
              </div>
              <div>τ − 1</div>
            </div>
          </div>
          <div className="ml-2">(4)</div>
        </div>
        <p className="mb-4">where</p>
        <div className="flex justify-center my-4">
          <div>
            ēr(c, w, T) ≡ 
            <div className="flex flex-col items-center">
              <div className="border-b border-black">
                <div className="flex items-center">
                  <div>∑</div>
                  <div className="ml-1">t∈T</div>
                </div>
                <div>er(c, w, t)</div>
              </div>
              <div>τ</div>
            </div>
          </div>
          <div className="ml-2">(5)</div>
        </div>
        <p className="mb-4">
          The Sharpe ratio of (c, w) in T is
        </p>
        <div className="flex justify-center my-4">
          <div>
            sr(c, w, T) ≡ 
            <div className="flex flex-col items-center">
              <div className="border-b border-black">ēr(c, w, T)</div>
              <div>sd(c, w, T)</div>
            </div>
          </div>
          <div className="ml-2">(6)</div>
        </div>
        <p className="mb-4">
          We evaluate each coin by how much it can improve the Sharpe ratio when appropriately
          added to the portfolio consisting only of Bitcoin. The score of c ∈ C in T is
        </p>
        <div className="flex items-center my-4 justify-center">
          <div>score(c, T) ≡ max<sub>w∈[0,1]</sub> sr(c, w, T) − sr(c, 0, T),</div>
          <div className="ml-2">(7)</div>
        </div>
        <p className="mb-4">
          where sr(c, 0, T) denotes the Sharpe ratio of the portfolio that consists only of Bitcoin in
          T. By definition, 0 = score(b, T) ≤ score(c, T) for all c ∈ C. The value
        </p>
        <div className="flex items-center my-4 justify-center">
          <div>max<sub>w∈[0,1]</sub> sr(c, w, T)</div>
          <div className="ml-2">(8)</div>
        </div>
        <p className="mb-4">
          represents the excess return per risk unit when the weight on c is ideally selected. The
          closer this value is to sr(c, 0, T), the less attractive it is to hold c together with Bitcoin
          than to hold only Bitcoin. In fact, if w = 0 maximizes sr(c, w, T), then score(c, T) = 0,
          which often happens in reality. In this case, no matter how well one constructs a portfolio
          using c, it will be inferior to just holding Bitcoin.
        </p>
        <p className="mb-4">
          We use our scores to identify coins that consistently achieve positive monthly average
          scores over the long term by excluding coins that have zero monthly average scores in any
          given month. As we will see in the data analysis in the next section, there are very few
          coins that pass the test. Therefore, our test is suitable for the purpose of strictly selecting
          coins that should be held together with Bitcoin.
        </p>
      </div>

      {/* Section 3: Coins to be held with Bitcoin */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">3 Coins to be held with Bitcoin</h2>
        <p className="mb-4">
          We obtained data on coin prices from CoinGecko for the 16-month period from April 1,
          2023 to July 31, 2024. The 134 coins we targeted were those that were ranked within the
          top 200 in terms of market capitalization and had no missing data during the period.
          <sup>2</sup>
        </p>
        <p className="mb-4">
          We calculated the score for each coin daily over the 16-month period from April 2023
          to July 2024, based on the last 90-day returns. We then used these scores to identify
          coins that consistently achieved positive monthly average scores over the long term by
          eliminating coins that had zero monthly average scores in any given month. Only six coins
          have passed this test of elimination. They are PENDLE, AKT, LEO, BGB, ANT, and
          WBTC. Table 1 shows the median of the 16 monthly average scores within the 16-month
          period for each of the six coins. These are the coins that Bitcoiners should have owned for
          portfolio management.
        </p>
        
        {/* Table 1 */}
        <div className="my-6">
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-100 text-black">
                <th className="border border-gray-400 p-2">Coin</th>
                <th className="border border-gray-400 p-2">Median score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 p-2">PENDLE</td>
                <td className="border border-gray-400 p-2">0.2964</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">AKT</td>
                <td className="border border-gray-400 p-2">0.2778</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">LEO</td>
                <td className="border border-gray-400 p-2">0.2479</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">BGB</td>
                <td className="border border-gray-400 p-2">0.2388</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">ANT</td>
                <td className="border border-gray-400 p-2">0.1812</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2">WBTC</td>
                <td className="border border-gray-400 p-2">0.0061</td>
              </tr>
            </tbody>
          </table>
          <p className="text-center mt-1 text-sm">Table 1: Median scores of coins whose scores were always positive within the 16 months</p>
        </div>
        
        <p className="text-sm italic mb-4">
          <sup>2</sup> This decision was made based on data from CoinGecko at 0:00 (GST) on August 4, 2024.
        </p>
      </div>

      {/* Section 4: Conclusion */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">4 Conclusion</h2>
        <p className="mb-4">
          We have analyzed coins that are to be held with Bitcoin for portfolio management. For
          this purpose, we designed a novel evaluation score of coins by using the Sharpe ratio. Out
          of 134 coins, only six coins survived the test to achieve positive scores over the long term.
          They are PENDLE, AKT, LEO, BGB, ANT, and WBTC.
        </p>
        <p className="mb-4">
          Since our analysis was conducted by observing price data ex post, it does not tell us
          ex ante which coins to include in a portfolio and in what proportions. Investigating the
          properties of the coins discovered in this analysis might help to analyze such a prediction
          problem, which is an important theme for future research.
        </p>
      </div>

      {/* References */}
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">References</h2>
        <p className="mb-2">
          Nakamoto, S. (2008) "Bitcoin: A Peer-to-Peer Electronic Cash System,"
          https://assets.pubpub.org/d8wct41f/31611263538139.pdf
        </p>
        <p className="mb-2">
          Sharpe, W. F. (1966) "Mutual Fund Performance," The Journal of Business, Vol. 39, No.
          1, pp. 119–138.
        </p>
      </div>
    </div>
  );
}