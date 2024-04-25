'use client'

import { useRouter } from "next/navigation"
import { SvgNames, SvgsToName } from "@/hooks/use-svg-org"
import { Channel } from "@/modules/channel/channel.type"
import { ArrowDownIcon, ArrowUp, ArrowUpIcon } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

interface MeetItemProps {
        id?: string
        name?:string 
        status:string
    }

    export const MeetItem = ({
      name,
      id,
      status,
  }: MeetItemProps) => {
    const router = useRouter()
  
const handleClick = () => {
    router.push(`/zoom/${id}`)
}
const routerClick = () => {
    router.push(`/meet/${id}`)
}

  return (
    <div
    className="w-full relative flex items-center space-x-3  bg-white hover:bg-neutral-100  p-3 rounded-lg transition cursor-pointer my-1"
    >
        <div 
        onClick={routerClick}
         className="min-w-0 flex-1">
            <div className="focus:outline-none">
                <div className="flex justify-between items-center mb-1">
                    <p className="text-sm font-medium text-gray-900">Reunion Job</p>
                </div>
            </div>
                    <div>
                       3:00 pm to 4:00 pm 
                    </div>
                    <span className=" text-xs text-neutral-500">{name}</span>
        </div>
                    <Button size='sm' className=" bg-lime-500" onClick={handleClick}>Join</Button>
    </div>
);
                        }