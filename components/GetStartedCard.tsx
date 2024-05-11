const GetStartedCard = () => {
    return (
        <section>
            <div className="mx-auto px-4 min-w-[300px] max-w-[400px]">
                <div className="w-full rounded-lg bg-[#0052fe] text-white p-8 flex flex-col items-center gap-y-5">
                    <h1 className="text-xl font-medium text-center ">
                        Get Started with CryptoCoin <br /> for FREE
                    </h1>
                    <p className="text-center text-sm max-w-[280px]">
                        With our range of features that you can equip for free, KoinX allows you
                        to be more educated and aware of your tax reports.
                    </p>
                    <img src={"https://i.ibb.co/gRcyGgJ/test.png"} alt="" width={210} height={100} />
                    <button className="px-4 py-2 bg-white text-black rounded-md font-medium">
                        Get Started for FREE
                    </button>
                </div>
            </div>
        </section>
    );
}

export default GetStartedCard;
