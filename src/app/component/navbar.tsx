'use client';
import Link from 'next/link';
import Navlink from './navlink';

const Navbar = () => {
  return (
    <div className="w-full bg-white shadow-sm z-20 border-b">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4 w-full">
        <div className="flex">
          <Link
            href="/"
            className="text-xl font-bold text-orange-600 hover:text-orange-800 transition-colors"
          >
            Example
          </Link>
        </div>
        <div className="flex-grow flex justify-end">
          <Navlink />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
