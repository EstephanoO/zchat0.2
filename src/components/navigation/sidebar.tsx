
import { FC } from "react"
import Box from "../Box"
import { currentProfile } from "@/lib/current-profile"
import { getOrgs } from "@/modules/org/org-api"
import NavigationItem from "./navigation-item"
import { ScrollArea } from "../ui/scroll-area"

interface SidebarProps {
    children : React.ReactNode
}

const Sidebar: FC<SidebarProps> =async ({children}) => {
    const userId = (await currentProfile()).id
    const organizations =  await getOrgs(userId)
return (
    <div className="flex h-full">
        <div 
        className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
            <Box>
                <div className="flex flex-col gap-y-4 px-5 py-4">
                    <label className="text-white text-lg font-bold">Organization</label>
                    <label className="text-white text-lg font-bold">Organization</label>
                </div>
            </Box>
            <Box >
        {organizations.map((server) => (
          <div key={server.id}>
            <NavigationItem name={server.name} id={server.id} imageUrl={server.logo} />
          </div>
        ))}
            </Box>
            <Box className=" overflow-y-auto h-full">
                <div className="flex flex-col gap-y-4 px-5 py-4">
                    <label className="text-white text-lg font-bold">Organization</label>
                    <label className="text-white text-lg font-bold">Organization</label>
                </div>
            </Box>
        </div>
        <main>
            {children}
        </main>
    </div>
)
}
export default Sidebar