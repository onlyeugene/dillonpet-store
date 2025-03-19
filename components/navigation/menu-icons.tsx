import { Heart, ShoppingBag, User } from "lucide-react";
import React from "react";
import TransitionLink from "./transition-link";
import { useSession } from "next-auth/react";

const MenuIcons = () => {
  const { data: session } = useSession();

  const count = 0;
  return (
    <div className="hidden gap-5 text-lg md:flex">
      <div className="relative">
        <TransitionLink
          className="border-none bg-transparent shadow-none hover:bg-transparent"
          href="/favorites"
          label="Wishlist"
          icon={<Heart size={18} />}
        />
        <span className="absolute top-0 left-3 flex h-4 w-4 items-center justify-center rounded-full border border-black bg-black text-xs text-white">
          {count}
        </span>
      </div>
      <div className="relative">
        <TransitionLink
          className="border-none bg-transparent shadow-none hover:bg-transparent"
          href="/cart"
          label="Cart"
          icon={<ShoppingBag size={18} />}
        />
        <span className="absolute top-0 left-3 flex h-4 w-4 items-center justify-center rounded-full border border-black bg-black text-xs text-white">
          {count}
        </span>
      </div>

      <div className="flex gap-5">
        {session ? (
         <div>
           <TransitionLink
            className="font-bold"
            href="/profile"
            label="Profile"
            icon={<User size={18} />}
          />
          <p>{session?.user?.firstName}</p>
         </div>
        ) : (
          <TransitionLink
            className="font-bold"
            href="/login"
            label="Login"
            icon={<User size={18} />}
          />
        )}
      </div>
    </div>
  );
};

export default MenuIcons;
