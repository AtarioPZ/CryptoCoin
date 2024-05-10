import Image from "next/image";
import TradingView from "../TradingView";
import { CoinDetails } from "@/utils/interface";

type HeroCoinProps = {
    coinDetails: CoinDetails;
};
export default async function HeroCoin({ coinDetails, }: HeroCoinProps) {
    return (
        <>
            {coinDetails && (
                <div>
                    <div className="flex flex-row flex-wrap gap-4 items-center pb-4 px-2">
                        <Image
                            src={coinDetails.image.large}
                            alt={coinDetails.name}
                            width={50}
                            height={50}
                        />
                        <p className="lg:text-3xl text-xl font-bold">{coinDetails.name}</p>
                        <p className="text-lg font-semibold text-slate-600">
                            {coinDetails.symbol.toUpperCase()}
                        </p>
                        <p className="p-2 bg-slate-400 text-white text-md rounded-lg font-light">
                            Rank #{coinDetails.market_cap_rank}
                        </p>
                    </div>

                    <div className="py-4 flex-col flex gap-2">
                        <div className="flex flex-row flex-wrap gap-4 items-center">
                            <p className="lg:text-3xl text-3xl font-bold">
                                ${" "}
                                {(coinDetails.market_data.current_price.usd)}
                            </p>
                            {/* <div className="flex flex-row gap-4 items-center">
                                <PriceChangePercentageTag
                                    priceChangePercentage={
                                        coinDetails.market_data
                                            .price_change_percentage_24h_in_currency.usd
                                    }
                                />
                                <p className="text-slate-400">(24H)</p>
                            </div> */}
                        </div>
                        <p className="text-lg font-semibold">
                            ₹{" "}
                            {(coinDetails.market_data.current_price.inr)}
                        </p>
                    </div>
                    <div className="lg:h-[560px] h-[320px] ">
                        <TradingView coinSymbol={coinDetails.symbol} />
                    </div>
                </div>
            )}
        </>
    );
}