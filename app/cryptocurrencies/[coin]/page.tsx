import { fetchCoinDetails, fetchTrendingCoins } from "@/utils/api";
import Sentiment from "@/components/CoinPage/Sentiment";
import About from "@/components/CoinPage/About";

type PageProps = {
    params: {
        coin: string; // Explicitly type the parameter
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
