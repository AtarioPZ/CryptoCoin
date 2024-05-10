"use client";

import React, { useEffect, useState, ChangeEvent } from 'react';
import { fetchCoinList, fetchTrendingCoins } from '@/utils/api';
import './Coin.css';
import Image from 'next/image';

interface CoinData {
    id: string;
    name: string;
}

interface TrendingCoin {
    item: {
        id: string;
        name: string;
        symbol: string;
        small: string;
    };
}

const Coin = () => {
    const [coins, setCoins] = useState<CoinData[]>([]);
    const [trendingCoins, setTrendingCoins] = useState<TrendingCoin[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [dropdownVisible, setDropdownVisible] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchCoinList();
            setCoins(data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchTrending = async () => {
            const trending = await fetchTrendingCoins();
            setTrendingCoins(trending);
        };
        fetchTrending();
    }, []);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        setDropdownVisible(query.length > 0);
    };

    const filteredCoins = coins.filter((coin) =>
        coin.name.toLowerCase().includes(searchQuery)
    );

    return (
        <div className="coin-container">
            <div className="trending-coins-section">
                <h2>Trending Coins</h2> {/* Title added above the grid */}
                <div className="trending-coins-grid"> {/* Grid layout for the trending coins */}
                    {trendingCoins.map((coin) => (
                        <div key={coin.item.id} className="trending-coin-item">
                            <Image src={coin.item.small} alt={coin.item.name} width={50} height={50} />
                            <span>{coin.item.name}</span>
                        </div>
                    ))}
                </div>
            </div>

           {/*  <div className="coin-search-container">
                <input
                    type="text"
                    placeholder="Search coins..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={() => setDropdownVisible(true)}
                />

                {dropdownVisible && (
                    <div className="dropdown">
                        {filteredCoins.map((coin) => (
                            <div key={coin.id} className="dropdown-item">
                                {coin.name}
                            </div>
                        ))}
                    </div>
                )}
            </div> */}
        </div>
    );
};

export default Coin;