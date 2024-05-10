import Image from "next/image";

const Navbar = () => {
    return (
        <section>
            <nav className="flex justify-between p-3 shadow-md items-center">
                <div>LOGO</div>

                {/* PC */}
                <div className="sm:block hidden">
                    <ul className="flex space-x-6 items-center">
                        <li>Crypto Taxes</li>
                        <li>Free Tools</li>
                        <li>Resource Center</li>
                        <button className="bg-blue-600 p-4 rounded-xl">Get Started</button>
                    </ul>
                </div>

                {/* Phone */}
                <div className="sm:hidden">
                    HAM
                </div>

            </nav>
        </section>
    );
}

export default Navbar;