import Fundamental from "./Fundamental";
import Performance from "./Performance";
import { CoinDetails } from "@/utils/interface";
import Image from "next/image";
import info from '@/public/next.svg'

interface CoinDetailsInfoProps {
    coinDetails: CoinDetails;
}

export default async function CoinDetailsInfo({ coinDetails }: CoinDetailsInfoProps) {

    const todayLow = coinDetails.market_data.low_24h.usd;
    const todayHigh = coinDetails.market_data.high_24h.usd;
    const lowPrice = coinDetails.market_data.atl.usd;
    const highPrice = coinDetails.market_data.ath.usd;

    return (
        <div className="bg-slate-50 drop-shadow-lg rounded-lg lg:p-8 p-4 h-fit">
            <div className="bg-white rounded-lg p-3">
                <p className="font-semibold text-2xl">Performance</p>

                <div className="flex flex-row justify-between items-center p-8 gap-4">
                    <div className="flex flex-col items-center w-[15%] text-center">
                        <p>Today&apos;s Low</p>
                        <p>${(todayLow)}</p>
                    </div>
                    <Performance highPrice={todayHigh} currentPrice={coinDetails.market_data.current_price.usd} />

                    <div className="flex flex-col items-center w-[15%] text-center ">
                        <p>Today&apos;s High</p>
                        <p>${(todayHigh)}</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center p-8 gap-4">
                    <div className="flex flex-col items-center w-[15%] text-center">
                        <p>52W Low</p>
                        <p>${(lowPrice)}</p>
                    </div>

                    <Performance highPrice={highPrice} currentPrice={coinDetails.market_data.current_price.usd} />
                    <div className="flex flex-col items-center w-[15%] text-center">
                        <p>52W High</p>
                        <p>${(highPrice)}</p>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-lg p-3 mt-4">
                <div className="flex flex-row gap-2 items-center flex-wrap my-4">
                    <p className="font-semibold text-xl">Fundamentals</p>
                    <Image src={info} alt="more info" className="opacity-50" width={25} height={25} />
                </div>
                {coinDetails && (


                    <div className="flex lg:flex-row flex-col lg:gap-12">
                        <div className="w-full">

                            <Fundamental title={`${coinDetails.name} Price`} value={`$${(coinDetails.market_data.current_price.usd)}`} />
                            <Fundamental title="24h Low/24h High" value={
                                `$${(coinDetails.market_data.low_24h.usd)} / $${(coinDetails.market_data.high_24h.usd)}`
                            } />

                            <Fundamental title="Trading Volume" value={
                                `${(coinDetails.market_data.circulating_supply)} ${coinDetails.symbol.toUpperCase()}`
                            } />

                            <Fundamental title="Market Cap Rank" value={
                                `#${coinDetails.market_cap_rank}`
                            } />

                        </div>
                        <div className="w-full">

                            <Fundamental title="Market Cap" value={`$${(coinDetails.market_data.market_cap.usd)}`} />
                            <Fundamental title="Volume / Market Cap" value={
                                `$${(coinDetails.market_data.total_volume.usd)}`
                            } />

                            <Fundamental title="All Time High" value={
                                `$${(coinDetails.market_data.ath.usd)}`
                            } />
                            <Fundamental title="All Time Low" value={
                                `$${(coinDetails.market_data.atl.usd)}`
                            } />

                        </div>


                    </div>
                )}
            </div>
        </div>
    );
}