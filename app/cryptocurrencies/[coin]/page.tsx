import { fetchCoinDetails, fetchTrendingCoins } from "@/utils/api";
import HeroCoin from "@/components/HeroCoin/heroCoin";
import CoinDetailsInfo from "@/components/CoinPage/CoinDetails/coinDetails";
import Sentiment from "@/components/CoinPage/Sentiment";
import About from "@/components/CoinPage/About";

type PageProps = {
    params: {
        coin: string;
    };
    searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function Page({ params }: PageProps) {
    const coinId = decodeURI(params.coin); // Decode the coin ID
    const coinDetails = await fetchCoinDetails(coinId); // Fetch the coin details

    // Determine coin name and description, falling back to coinId
    const coinName = coinDetails?.name ?? coinId; // Use coinId if name is not available
    const coinDescription = coinDetails?.description?.en ?? ""; // Default to empty string if no description

    return (
        <section>

            {coinDetails ? ( // If details are available, render the `About` component
                <div>
                    <div className="bg-white drop-shadow-lg rounded-lg p-8 h-fit w-full">
                        <HeroCoin coinDetails={coinDetails} />
                    </div>
                    <CoinDetailsInfo coinDetails={coinDetails} />
                    <Sentiment />
                    <About coinInfo={coinDescription} coinName={coinName} />
                </div>

            ) : ( // If details are not available, render the fallback
                <div>
                    <h2>Details not available for {coinName}</h2> {/* Use coinId as fallback */}
                    <p>Sorry, we could not retrieve details for this cryptocurrency.</p>
                </div>
            )}
        </section>
    );
}
