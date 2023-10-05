"use client";

import React from "react";

const Navbar = () => {
    return (
        <div>
            <ul className="flex justify-center space-x-12 p-12">
                <li>
                    <a href="https://twitter.com/fibbbonachos">Twitter</a>
                </li>
                <li>
                    <a href="https://hashnode.com/@Fibz">Hashnode</a>
                </li>
                <li>
                    <a href="https://github.com/fibbbonachos">GitHub</a>
                </li>
                <li>
                    <a href="https://fibbonachos.vercel.app/">Portfolio</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
