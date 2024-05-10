import Link from "next/link";

const SubHeader = () => {
    return (
        <section className="w-[50%] bg-gray-200 p-3 my-3 rounded-lg mx-3">
            <div>
                <Link href='/'>
                    Cryptocurrencies
                </Link>
            </div>
        </section>
    );
}

export default SubHeader;