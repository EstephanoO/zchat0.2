'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"

export const UserButton = () => {

  return (
         <DropdownMenu >
            <DropdownMenuTrigger className='flex mx-3 h-[48px] w-[48px] rounded-[24px]
         group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center
          bg-background dark:bg-neutral-700 group hover:bg-emerald-500 mb-2'>User</DropdownMenuTrigger>
          <DropdownMenuContent>
          <DropdownMenuItem className=" cursor-pointer" >Perfil</DropdownMenuItem>
          <DropdownMenuItem className=" cursor-pointer">Logout</DropdownMenuItem>
</DropdownMenuContent>
          </DropdownMenu>
  )
}
