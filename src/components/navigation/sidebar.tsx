import DesktopSidebar from "./sidebar/desktop-sidebar"
import MobileFooter from "./sidebar/mobile-footer"

interface SidebarProps {
}

function Sidebar({
}: SidebarProps) {
    return (
        <div className="h-full">
            <DesktopSidebar />
            <MobileFooter />
        </div>
    )
}

export default Sidebar