import Link from "next/link";
import type { CoinDetails } from "@/utils/interface";

interface SubHeaderProps {
    coinName: string;
}

const SubHeader = ({ coinName }: SubHeaderProps) => {
    return (
        <section className="bg-gray-200 p-3 my-3 rounded-lg flex items-center">

            <Link href="/" className="text-blue-600 underline">
                Cryptocurrencies
            </Link>
            <span className="text-gray-700">{" > "} {coinName}</span>
        </section>
    );
};

export default SubHeader;
