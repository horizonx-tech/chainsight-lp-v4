import axios from 'axios';

const PROTOCOLS = [
  'infrared-finance',
  'ivx-protocol',
  'dolomite', 
  'neemo-finance',
  'palmy-finance',
  'cygnus'
];

interface ChainTVLResponse {
  currentChainTvls: {
    [chain: string]: number;
  };
}

export async function fetchProtocolsTVL() {
  try {
    const tvlPromises = PROTOCOLS.map(async (protocol) => {
      const response = await axios.get<ChainTVLResponse>(`https://api.llama.fi/protocol/${protocol}`);
      const data = response.data;
        // Sum up TVL across all chains, excluding borrowed amounts
      const totalTVL = Object.entries(data.currentChainTvls).reduce((sum: number, [key, value]: [string, number]) => {
        if (!key.toLowerCase().includes('borrowed')) {
          return sum + value;
        }
        return sum;
      }, 0);

      return totalTVL;
    });

    const results = await Promise.all(tvlPromises);
    return results.reduce((total, current) => total + current, 0);
  } catch (error) {
    console.error('Error fetching TVL data:', error);
    return 0;
  }
}