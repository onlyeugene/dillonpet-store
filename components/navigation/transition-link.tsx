'use client'

import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface Props {
    href: string;
    label?: string;
    className?: string;
    icon?: React.ReactNode; 
}

const TransitionLink = ({ href, label, className, icon }: Props) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        if (pathname !== href) {
            router.push(href);
        }
    };

    return (
        <div
            onClick={handleClick}
            className={`cursor-pointer flex items-center gap-2 ${className}`}
        >
            {icon && <span>{icon}</span>} {/* ✅ Renders the icon separately */}
            {label && <span className="font-semibold">{label}</span>} {/* ✅ Only renders label if provided */}
        </div>
    );
};

export default TransitionLink;
