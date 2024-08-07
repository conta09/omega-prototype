import axios from 'axios';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            ids: 'bitcoin,ethereum,solana,cardano,ripple,polkadot,dogecoin',
          },
        });
        setPrices(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crypto prices:', error);
        setLoading(false);
      }
    };

    fetchPrices();
    const interval = setInterval(fetchPrices, 60000); // Update prices every 60 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-sm font-medium text-[#a9a8a8]">Current Crypto Prices</h2>
      <div className="space-y-2">
        {prices.map((crypto) => (
          <div key={crypto.id} className="flex justify-between items-center py-5 px-3 bg-[#242424] rounded-xl">
            <div className="flex items-center space-x-2">
              <img src={crypto.image} alt={crypto.name} className="w-6 h-6" />
              <span className="text-white font-semibold">{crypto.name} ({crypto.symbol.toUpperCase()})</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white">${crypto.current_price.toFixed(2)}</span>
              <span
                className={`text-sm font-semibold ${
                  crypto.price_change_percentage_24h > 0 ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {crypto.price_change_percentage_24h > 0 ? '▲' : '▼'} {crypto.price_change_percentage_24h.toFixed(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
