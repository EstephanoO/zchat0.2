'use client'

import Image from "next/image"
import { useParams, useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { ActionTooltip } from "../action-tooltip";
import { Accordion, AccordionContent, AccordionItem } from "../ui/accordion";
import { AccordionTrigger } from "@radix-ui/react-accordion";

interface NavigationItemProps {
    id:string  | undefined;
    imageUrl: string
    name:string
}

function NavigationItem({
 name,
 imageUrl,
 id,
}: NavigationItemProps) {
    const params = useParams()
    const router = useRouter()
    
    const onClick = () => {
        router.push(`/org/${id}`)
    }
  return (
    <Accordion type='single' collapsible className="w-full rounded-md bg-indigo-300">
        <AccordionItem value="item-1">
            <AccordionTrigger>{name}</AccordionTrigger>
            <AccordionContent>Organization Description</AccordionContent>
        </AccordionItem>
    </Accordion>
            // <button
            //     onClick={onClick}
            //     className="group relative flex items-center"
            // >
            //     <div className={cn(
            //         'absolute left-0 bg-primary rounded-r-full transition-all w-[4px]',
            //         params?.serverId !== id && 'group-hover:h-[20px]',
            //         params?.serverId === id ? 'h-[36px]' : 'h-[8px]'
            //     )} />
            //     <div className={cn(
            //         'relateive group mt-2 flex mx-4 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden', params?.serverId === id && 'bg-color1 text-black rounded-[16px]' 
            //     )} >
            //         <img
            //             src={`https://maps-org.pockethost.io/api/files/w8syc2fvg1wyeat/${id}/${imageUrl}?token=`}
            //             alt='Channel'
            //         />

            //     </div>
            // </button>
  )
}

export default NavigationItem