import { SvgsToName } from "@/hooks/use-svg-org"
import { Organization } from "@/modules/org/org.type"
import {  ChevronDownIcon, InfoIcon, VideoIcon } from "lucide-react"

interface HeaderProps {
    org: Organization
}

export const Header = ({org}: HeaderProps) => {
    return (
      <div className="bg-lime-200/50 w-full border-b-[1px] sm:px-4 py-[6px] px-4 lg:px-6 justify-between items-center shadow-sm">
          <div className="flex gap-3 items-center">
              <div className="lg:hidden block text-sky-500 hover:text-sky-600 transition cursor-pointer"><ChevronDownIcon /></div>
              <SvgsToName name={org.logo} width="40px" height="40px"/>
              <div className="flex flex-col">
              <div className="text-2xl font-bold text-neutral-800">{org.name}</div>
              <div className="text-sm font-light text-neutral-500">3 miembros activos</div>
              </div>
              <div className="ml-auto cursor-pointer flex">  {/* Añade el icono a la derecha */}
                  <VideoIcon className="h-6 w-6 mr-2 text-gray-500 hover:text-gray-700" />
                  <InfoIcon className="h-6 w-6 text-gray-500 hover:text-gray-700 ml-2" />
              </div>
          </div>
      </div>
    )
  }