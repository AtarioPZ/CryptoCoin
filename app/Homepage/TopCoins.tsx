"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const predefinedTopCoins = [
    {
        id: 'bitcoin',
        name: 'Bitcoin',
        image: '/coins/bitcoin.svg',
    },
    {
        id: 'ethereum',
        name: 'Ethereum',
        image: '/coins/ethereum.svg',
    },
    {
        id: 'tether',
        name: 'Tether',
        image: '/coins/tether.svg',
    },
    {
        id: 'binancecoin',
        name: 'Binance Coin',
        image: '/coins/bnb.svg',
    },
    {
        id: 'solana',
        name: 'Solana',
        image: '/coins/solana.svg',
    },
];


const TopCoins = () => {
    return (
        <section className="p-4">
            <h2 className="text-2xl font-bold">Top 5 Cryptocurrencies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4 mt-4">
                {predefinedTopCoins.map((coin) => (
                    <Link
                        key={coin.id}
                        href={`/cryptocurrencies/${coin.id}`}
                        className="border p-4 rounded shadow flex flex-col justify-center items-center relative hover:bg-gray-100"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={coin.image}
                            alt={`${coin.name} logo`}
                            width={32}
                            height={32}
                            className="mb-2"
                        />
                        <h3 className="text-lg font-semibold text-center">
                            {coin.name} ({coin.id})
                        </h3>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default TopCoins;
