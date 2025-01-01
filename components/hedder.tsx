import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <Link href="/">
                        <a>M A S A</a>
                    </Link>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;