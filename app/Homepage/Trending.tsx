"use client";

import { useEffect, useState } from 'react';
import { fetchTrendingCoins } from '@/utils/api';
import Image from 'next/image';
import Up from '@/public/up.svg';
import Down from '@/public/down.svg';

interface TrendingCoin {
    item: {
        id: string;
        name: string;
        symbol: string;
        large: string; // Coin logo/image
    };
    price_change_percentage_24h: number | null; // 24-hour price change
}

const Trending = () => {
    const [trendingCoins, setTrendingCoins] = useState<TrendingCoin[]>([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const fetchCoins = async () => {
        setIsRefreshing(true); // Indicate that data is being fetched
        try {
            const coins = await fetchTrendingCoins();
            setTrendingCoins(coins);
        } catch (error) {
            console.error("Error fetching trending coins:", error);
        }
        setIsRefreshing(false); // Reset once fetch is complete
    };

    useEffect(() => {
        fetchCoins();

        const intervalId = setInterval(fetchCoins, 30000); // Refresh every 30 seconds

        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);

    return (
        <section className="p-6 bg-white rounded-lg">
            <h2 className="text-2xl font-bold">Trending Cryptocurrencies</h2>
            {isRefreshing && <p>Refreshing...</p>} {/* Display while refreshing */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                {trendingCoins.map((coin) => (
                    <a
                        key={coin.item.id}
                        href={`/cryptocurrencies/${coin.item.id}`} // Link to the coin's page
                        className="border p-4 rounded shadow flex flex-col justify-center items-center relative hover:bg-gray-100" // Additional styling for hover effects
                        rel="noopener noreferrer" // Security measure
                    >
                        <Image
                            src={coin.item.large}
                            alt={`${coin.item.name} logo`}
                            width={48}
                            height={48}
                            className="mb-2"
                        />
                        {coin.price_change_percentage_24h !== null && (
                            <Image
                                src={coin.price_change_percentage_24h >= 0 ? Up : Down}
                                alt={coin.price_change_percentage_24h >= 0 ? "Rising" : "Decreasing"}
                                width={24}
                                height={24}
                                className="absolute top-0 right-0 m-2"
                            />
                        )}
                        <h3 className="text-lg font-semibold text-center">
                            {coin.item.name} ({coin.item.symbol.toUpperCase()})
                        </h3>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Trending;
