import { currentProfile } from "@/lib/current-profile"
import DesktopSidebar from "./sidebar/desktop-sidebar"
import MobileFooter from "./sidebar/mobile-footer"

interface SidebarProps {
}

async function Sidebar({
}: SidebarProps) {
    const user = await currentProfile()
    return (
        <div className="h-full">
            <DesktopSidebar user={user} />
            <MobileFooter />
        </div>
    )
}

export default Sidebar