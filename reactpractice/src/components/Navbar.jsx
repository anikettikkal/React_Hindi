import React from "react";
function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MyApp</h1>

      <ul className="flex gap-6">
        <li className="cursor-pointer hover:text-yellow-400">Home</li>
        <li className="cursor-pointer hover:text-yellow-400">About</li>
        <li className="cursor-pointer hover:text-yellow-400">Services</li>
        <li className="cursor-pointer hover:text-yellow-400">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
