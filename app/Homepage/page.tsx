import SubHeader from "./Coins/SubHeader/page";
import Coin from "./Coins/page";
import Trending from "./Trending";
import Search from "@/components/Search";

const HomePage = () => {
    return (
        <section>
            <div className="md:mx-20">
                <SubHeader />
                <div className="flex flex-col lg:flex-row justify-between items-start">
                    <div className="order-2 lg:order-1 w-full lg:w-1/2">
                        <Trending />
                    </div>
                    <div className="order-1 lg:order-2 flex flex-col w-full lg:w-1/3 h-full gap-4 pb-4 px-4 bg-slate-50 scroll whitespace-nowrap">
                        <Search />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomePage;
