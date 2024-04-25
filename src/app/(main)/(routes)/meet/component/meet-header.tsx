'use client'

import { useModalState } from "@/hooks/use-modal-store"
import { Organization } from "@/modules/org/org.type"
import {  VideoIcon } from "lucide-react"


export const MeetHeader = ({org} : {org :Organization[]}) => {
    const {onOpen} = useModalState()
  return (
        <div className="flex justify-between h-full" >
            <div className="text-2xl font-bold text-neutral-800">Reuniones</div>
            <div className=" ml-28 mt-[6px]">
                <VideoIcon 
                onClick={() => onOpen('createMeet', {servers: org})}
                className='cursor-pointer text-neutral-500 hover:text-black w-[20px] h-[20px]' 
            /></div>
        </div>
  )
}