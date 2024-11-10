// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const links = [
  { href: '/login', label: 'Login' },
  { href: '/signup', label: 'Signup' },
];

const Navbar: React.FC = () => {
  return (
    <header className="bg-red-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Left Side: Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/darazb.png"
            className="h-10 cursor-pointer"
            width={50}
            height={50}
          />
        </Link>
        
        {/* Responsive Search Bar */}
        <div className="relative flex-grow max-w-lg mx-4">
          <input
            type="text"
            placeholder="Search in Daraz"
            className="w-full rounded-full pl-10 pr-4 py-2 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">🔍</span>
        </div>

        {/* Right Side: Links */}
        <nav className="flex items-center space-x-4 md:space-x-6">
          {links.map((link) => (
            <Link href={link.href} key={link.href} className="text-xs sm:text-sm hover:text-gray-300 transition duration-200">
              {link.label}
            </Link>
          ))}
          <Link href="/cart" className="text-xs sm:text-sm hover:text-gray-300 transition duration-200">
            Cart
          </Link>
          <Link href="/language" className="text-xs sm:text-sm hover:text-gray-300 transition duration-200">
            EN
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
