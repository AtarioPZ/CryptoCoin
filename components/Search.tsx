"use client";

import useDebounce from "@/hooks/debounce";
import { fetchCoinList } from '@/utils/api';
import { CoinList } from "@/utils/interface";
import { useEffect, useState, ChangeEvent } from "react";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [coinsList, setCoinsList] = useState<CoinList[]>([]);
    const [filteredCoinsList, setFilteredCoinsList] = useState<CoinList[]>([]);

    // Caching mechanism to reduce API calls
    useEffect(() => {
        const fetchData = async () => {
            const cachedCoinList = localStorage.getItem('coinList'); // Check if data is cached
            if (cachedCoinList) {
                setCoinsList(JSON.parse(cachedCoinList)); // Use cached data
            } else {
                try {
                    const data = await fetchCoinList(); // Fetch new data if not cached
                    setCoinsList(data);
                    localStorage.setItem('coinList', JSON.stringify(data)); // Cache the fetched data
                } catch (error) {
                    console.error("Error fetching coin list:", error);
                }
            }
        };
        fetchData();
    }, []);



    useDebounce(() => {
        const filterData = async () => {
            const filteredData = coinsList.filter((coin) => {
                return coin.name.toLowerCase().includes(searchQuery.toLowerCase());
            });
            setFilteredCoinsList(filteredData);
        };

        if (searchQuery) {
            filterData();
        } else {
            setFilteredCoinsList([]);
        }
    }, [searchQuery], 600);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    return (
        <section>
            <div className="sticky top-0 left-0 z-50 bg-slate-50">
                <div className="font-semibold text-center lg:text-2xl p-4">Search for a Crypto</div>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full h-10 p-4 text-lg border border-slate-200 rounded-lg"
                />
            </div>

            <div className="relative flex flex-col gap-4">
                {filteredCoinsList.length === 0 ? (
                    <div className="text-center">
                        {searchQuery.length === 0 ? "Start searching!" : "No results found!"}
                    </div>
                ) : (
                    <div
                        className="dropdown absolute w-full mt-1 bg-white border border-slate-200 rounded-lg overflow-auto"
                        style={{ maxHeight: '300px', zIndex: 100 }}
                    >
                        {filteredCoinsList.map((coin) => (
                            <div key={coin.id} className="dropdown-item p-2 hover:bg-slate-100 cursor-pointer">
                                <a
                                    href={`/cryptocurrencies/${coin.id}`}
                                    className="w-full"
                                    rel="noopener noreferrer"
                                >
                                    <p className="font-semibold">{coin.name.substring(0, 20)}</p>
                                    <div className="flex lg:flex-row flex-col gap-2 items-center justify-between w-full">
                                        <p>{coin.symbol}</p>
                                        <p>{coin.id.substring(0, 20)}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Search;