import SubHeader from "./Coins/SubHeader/page";
import TopCoins from "./TopCoins";
import Trending from "./Trending";
import Search from "@/components/Search";
import GetStartedCard from "@/components/GetStartedCard";

const HomePage = () => {
    return (
        <section className="bg-slate-50">
            <div className="md:mx-20 pt-9">
                <SubHeader />
                <div className="flex flex-col lg:flex-row justify-between items-start">
                    <div className="order-2 lg:order-1 w-full lg:w-1/2">
                        <TopCoins />
                        <div className="my-10">
                            <Trending />
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 flex flex-col w-full lg:w-1/3 h-full gap-4 pb-4 px-4 bg-slate-50 scroll">
                        <div className="flex flex-col">
                            <Search />
                            <div className="mb-20"></div>
                            <GetStartedCard />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default HomePage;
