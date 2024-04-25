'use client'

import { cn } from "@/lib/utils";
import { group } from "console";
import Link from "next/link";

interface DesktopItemProps {
    label:string;
    icon: any;
    href: string
    active:boolean;
}

export const DesktopItem = ({
    label,
    icon: Icon,
    href,
    active
}: DesktopItemProps) => {
    const handleClick = () => {
        console.log('clicked')
    }
  return (
    <li onClick={handleClick}>
        <Link href={href}
        className={cn(
            'group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-gray-500 hover:text-black hover:bg-lime-400',
            active && 'text-black bg-gray-100' 
        )}
         >
<Icon className="h-6 w-6 shrink-0"/>
            <span className="sr-only">{label}</span>
        </Link>
    </li>
  )
}
