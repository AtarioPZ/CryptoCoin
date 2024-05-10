import Image from "next/image";

type TrendingPriceProps = {
    priceChange: number;
};

export default function TrendingPrice({ priceChange, }: TrendingPriceProps) {
    return (
        <div>
            <div>
                {priceChange < 0 ? (
                    <div className="flex flex-row items-center justify-around gap-2 bg-red-300 rounded-lg bg-opacity-30 py-0.5 px-2">
                        <Image src='/down.svg' alt="down" className=" w-4 h-4" />
                        <p className="font-bold">
                            {priceChange?.toFixed(2)}%
                        </p>
                    </div>
                ) : (
                    <div className="flex flex-row items-center gap-2 justify-between bg-green-300 rounded-lg bg-opacity-30 py-0.5 px-2">
                        <Image src='/up.svg' alt="up" className="w-4 h-4" />
                        <p className="-500 font-bold">
                            {priceChange?.toFixed(2)}%
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}