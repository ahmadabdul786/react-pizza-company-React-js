import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState("");
  const nevigate = useNavigate();
  
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    nevigate(`/order/${query}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setQuery(e.target.value)}
        placeholder="search:id"
        type="text"
        className="focus:outline-none sm-64  focus:ring focus:ring-yellow-300 transition-all duration-500 rounded-full py-2 px-4 text-sm bg-yellow-100  placeholder:text-stone-400  sm:focus:w-60 "
      />
    </form>
  );
}
