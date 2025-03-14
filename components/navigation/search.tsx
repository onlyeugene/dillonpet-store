import React from "react";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <div className="relative w-[40rem] md:block hidden">
      <Input placeholder="Search" type="search"  className="px-10 focus:border-none focus-visible:ring-[1px] border-black rounded-full placeholder:text-black"/>
      <SearchIcon className="absolute top-2 left-3"  size={14}/>
    </div>
  );
};

export default Search;
