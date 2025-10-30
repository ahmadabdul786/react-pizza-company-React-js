import React from "react";
import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "./Username";

export default function Header() {
  return (
    <header className="flex justify-between item-center mb-4 sm:mb-8 px-4 py-4 bg-yellow-500  ">
      
      <Link to="/" className="tracking-widest">
        <span className="text-stone-600 font-semibold text-xl">Fast react pizza Co.</span>
      </Link>
      
      <SearchOrder />
      <Username />
    </header>
  );
}
