'use client'

import Image from "next/image"
import { useRouter } from "next/navigation"
import { BriefCase } from "../icons/icons/briefcase-svgrepo-com"
import { SvgNames, SvgsToName } from "@/hooks/use-svg-org"
import { Channel } from "@/modules/channel/channel.type"
import { ArrowDownIcon, ArrowUp, ArrowUpIcon } from "lucide-react"
import { useState } from "react"

interface ServerItemProps {
        id: string
        logo:SvgNames 
        name:string 
        notificationCount: number
        channels: Channel[]
    }

    export const ServerItem = ({
      id,
      logo,
      name,
      notificationCount,
      channels
  }: ServerItemProps) => {
    const router = useRouter()
    const [isChannelsVisible, setIsChannelsVisible] = useState(false); // Agrega un estado para manejar la visibilidad de los canales
    const handleClick = () => {
      router.push(`/org/${id}`)
    }
    const handleArrowClick = () => {
      setIsChannelsVisible(!isChannelsVisible); // Cambia la visibilidad de los canales al hacer clic en la flecha
  };

  
  return (
    <div
        className="w-full relative flex items-center space-x-3  p-3 rounded-lg transition cursor-pointer my-1"
    >
      {channels && ( 
            <div onClick={handleArrowClick}>
                {isChannelsVisible ? 
                    <ArrowUpIcon width={20} height={20} /> : 
                    <ArrowDownIcon width={20} height={20} />
                }
            </div>
      )}
        <div 
        onClick={handleClick}
         className="min-w-0 flex-1 bg-white hover:bg-neutral-100  rounded-lg p-2">
            <div className="focus:outline-none">
                <div className="flex justify-between items-center mb-1">
                    <SvgsToName
                        width="40px"
                        height="40px"
                        name={logo}
                        className=" bg-lime-400/70 rounded-sm "
                    />
                    <p className="text-sm font-medium text-gray-900">{name}</p>
                </div>
            </div>
                {isChannelsVisible && ( // Si los canales están visibles, muestra la lista de canales
                    <div>
                        {channels.map((channel) => (
                            <p key={channel.id}>{channel.name}</p>
                        ))}
                    </div>
                )}
        </div>
    </div>
);
                        }