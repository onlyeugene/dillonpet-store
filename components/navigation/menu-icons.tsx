import { Heart, ShoppingBag, User} from "lucide-react";
import React from "react";
import TransitionLink from "./transition-link";

const MenuIcons = () => {
  const count = 0;
  return (
    <div className="md:flex hidden gap-5 text-lg">
      <div className="relative">
        <TransitionLink
          className="bg-transparent  hover:bg-transparent border-none shadow-none"
          href="/favorites"
          label="Wishlist"
          icon={<Heart size={18} />}
        />
        <span className="absolute top-0 left-3 border rounded-full bg-black text-white w-4 h-4 text-xs flex items-center justify-center border-black">
          {count}
        </span>
      </div>
      <div className="relative">
        <TransitionLink
          className="bg-transparent hover:bg-transparent border-none shadow-none"
          href="/cart"
          label="Cart"
          icon={<ShoppingBag size={18} />}
        />
        <span className="absolute top-0 left-3 border rounded-full bg-black text-white w-4 h-4 text-xs flex items-center justify-center border-black">
          {count}
        </span>
      </div>

      <div className="flex gap-5">
        <TransitionLink className="font-bold"  href="/login" label="Login" icon={<User size={18}/>}/>
        {/* <TransitionLink className="border px-5 py-1 rounded-md" href="/register" label="Register"/> */}
      </div>
    </div>
  );
};

export default MenuIcons;
