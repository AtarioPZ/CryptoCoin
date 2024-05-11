import { fetchCoinDetails, fetchTrendingCoins } from "@/utils/api";
import SubHeader from "@/app/Homepage/Coins/SubHeader/page";
import HeroCoin from "@/components/HeroCoin/heroCoin";
import CoinDetailsInfo from "@/components/CoinPage/CoinDetails/coinDetails";
import Sentiment from "@/components/CoinPage/Sentiment";
import About from "@/components/CoinPage/About";
import Link from "next/link";

type PageProps = {
    params: {
        coin: string;
    };
    searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function Page({ params }: PageProps) {
    const coinId = decodeURI(params.coin); // Decode the coin ID
    const coinDetails = await fetchCoinDetails(coinId); // Fetch the coin details

    const coinName = coinDetails?.name ?? coinId; // Determine coin name and fallback to coinId if unavailable
    const coinDescription = coinDetails?.description?.en ?? ""; // Default to empty string if no description

    return (
        <section className="w-full bg-slate-50">
            <div className="md:w-4/5">
                {coinDetails ? (
                    <div className="md:mx-20 pt-9">
                        <SubHeader />
                        <div className="bg-white drop-shadow-lg rounded-lg p-8 h-fit w-full my-4">
                            <HeroCoin coinDetails={coinDetails} />
                        </div>
                        <CoinDetailsInfo coinDetails={coinDetails} />
                        <div className="my-4"></div>
                        <Sentiment />
                        <div className="my-4"></div>
                        <About coinInfo={coinDescription} coinName={coinName} />
                    </div>
                ) : (
                    <div className="p-10 text-2xl">
                        <h2>Details not available for {coinName}</h2> {/* Fallback */}
                        <p>Sorry, we could not retrieve details for this cryptocurrency.</p>
                        <Link href='/' className="bg-blue-300 p-5">Go Back Home</Link>
                    </div>
                )}
            </div>
        </section>
    );
}
