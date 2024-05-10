"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFilterRight } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the mobile menu state
    };

    return (
        <section>
            <nav className="flex justify-between p-3 shadow-md items-center">
                <div>
                    <Link href="/">
                        <Image src="/logo.png" alt="Logo" width={200} height={100} />
                    </Link>
                </div>

                {/* PC Navbar */}
                <div className="hidden sm:block">
                    <ul className="flex space-x-6 items-center font-semibold">
                        <Link href="#"><li>Crypto Taxes</li></Link>
                        <Link href="#"><li>Free Tools</li></Link>
                        <Link href="#"><li>Resource Center</li></Link>
                        <Link href="#">
                            <button className="bg-blue-500 p-4 rounded-xl text-white">Get Started</button>
                        </Link>
                    </ul>
                </div>

                {/* Mobile Navbar */}
                <div className="sm:hidden flex items-center">
                    <button onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
                        {isMobileMenuOpen ? <AiOutlineClose size={32} /> : <BsFilterRight size={32} />}
                        {/* Change icon based on the menu state */}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Content */}
            {isMobileMenuOpen && (
                <div className="bg-gray-200  z-1000 flex flex-col items-center p-4">
                    <ul className="flex flex-col items-center gap-6">
                        <Link href="#"><li>Crypto Taxes</li></Link>
                        <Link href="#"><li>Free Tools</li></Link>
                        <Link href="#"><li>Resource Center</li></Link>
                        <Link href="#">
                            <button className="bg-blue-500 p-4 rounded-xl text-white">Get Started</button>
                        </Link>
                    </ul>
                </div>
            )}
        </section>
    );
};

export default Navbar;
