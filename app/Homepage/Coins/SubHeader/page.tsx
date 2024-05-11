import Link from "next/link";

const SubHeader = () => {
    return (
        <section className="w-[50%] bg-slate-200 p-3 mb-3 rounded-lg">
            <div>
                <Link href='/'>
                    Cryptocurrencies
                </Link>
            </div>
        </section>
    );
}

export default SubHeader;