'use client'

import { useModalState } from "@/hooks/use-modal-store"
import { Organization } from "@/modules/org/org.type"
import { UserPlus } from "lucide-react"

interface OrgHeaderProps {
  org: Organization[]
}

export const OrgHeader = ({org}: OrgHeaderProps) => {
  const {onOpen} = useModalState()
  return (
        <div className="flex justify-between h-full" >
            <div className="text-2xl font-bold text-neutral-800">Home</div>
            <div className="ml-40 mt-[6px]"><UserPlus className=' cursor-pointer text-neutral-500 hover:text-black w-[20px] h-[20px]' 
            onClick={() => onOpen('invite', {servers: org})}
            /></div>
        </div>
  )
}