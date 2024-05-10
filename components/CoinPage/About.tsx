type AboutProps = {
    coinName: string;
    coinInfo: string;
};
export default function About({ coinName, coinInfo }: AboutProps) {
    return (
        <div className="bg-white drop-shadow-lg rounded-lg lg:p-8 p-4 h-fit flex flex-col">
            <p className="text-2xl font-semibold">About {coinName} </p>
            <p className=" text-lg font-semibold my-4"> What is {coinName}? </p>

            <div dangerouslySetInnerHTML={{ __html: coinInfo }} />

            <span className="mt-4 h-0.5 bg-gray-300" />

            <p className=" text-lg font-semibold my-4">Lorem ipsum dolor sit amet</p>
            <p>
                Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
                tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
                Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
                fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
                pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
                morbi sodales odio sed rhoncus. <br /> <br />
                Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
                vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
                felis pellentesque interdum. Odio cursus phasellus velit in senectus
                enim dui. Turpis tristique placerat interdum sed volutpat. ld imperdiet
                magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent
                massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
                phasellus. Integer pellentesque enim convallis ultricies at. <br />{" "}
                <br />
                Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
                vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
                pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
                fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
                dui
            </p>

            <span className="mt-4 h-0.5 bg-gray-300" />

            <p className=" text-2xl font-semibold my-4">Already holding {coinName}</p>
            <div className="flex lg:flex-row items-center flex-col flex-wrap gap-4">
                Calculate your tax liability
            </div>

            <span className="my-4 h-0.5 bg-gray-300" />
            <p>
                Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
                vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
                pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
                fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
                dui
            </p>
        </div>
    );
}