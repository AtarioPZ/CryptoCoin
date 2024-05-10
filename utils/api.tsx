// utils/api.tsx
export const fetchCoinList = async () => {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/list');
        if (!response.ok) {
            throw new Error(`Failed to fetch coin list: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching coin list:', error);
        return []; // Return an empty array on error
    }
};

export const fetchCoinDetails = async (coinId: string) => {
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch coin details for ${coinId}: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`Error fetching details for coin ${coinId}:`, error);
        return null; // Return null if fetching fails
    }
};

export const fetchTrendingCoins = async () => {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        const trendingCoins = await response.json();

        const coinDetails = await Promise.all(
            // Limit to the first 10 coins to reduce the number of API requests
            trendingCoins.coins.slice(0, 10).map(async (coin: any) => {
                try {
                    const coinInfo = await fetchCoinDetails(coin.item.id);
                    return {
                        ...coin,
                        price_change_percentage_24h: coinInfo?.market_data?.price_change_percentage_24h ?? null,
                    };
                } catch (fetchError) {
                    console.error(`Error fetching details for coin ${coin.item.id}:`, fetchError);
                    return {
                        ...coin,
                        price_change_percentage_24h: null, // Fallback value in case of error
                    };
                }
            })
        );

        return coinDetails;
    } catch (error) {
        console.error('Error fetching trending coins:', error);
        return [];
    }
};