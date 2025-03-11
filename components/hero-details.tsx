import { HeadsetIcon, Truck, Vault, Wallet } from "lucide-react";
import React from "react";

const HeroDetails = () => {
  return (
    <section  className="flex md:flex-row flex-col justify-between items-center container w-11/12">
      <div className="flex items-center gap-2">
        <Wallet size={28}/>
        <div>
          <h1 className="font-bold text-xl">Payment Method</h1>
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Truck size={28}/>
        <div>
          <h1 className="font-bold text-xl">Fast Shipping</h1>
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Vault size={28}/>
        <div>
          <h1 className="font-bold text-xl">Secured Payments</h1>
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <HeadsetIcon size={28}/>
        <div>
          <h1 className="font-bold text-xl">Customer Support</h1>
          <span>Lorem ipsum dolor sit amet.</span>
        </div>
      </div>
    </section>
  );
};

export default HeroDetails;
