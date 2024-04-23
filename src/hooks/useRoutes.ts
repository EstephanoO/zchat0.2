import { useMemo } from "react";
import {  usePathname } from "next/navigation";
import { Bell, Headset, HomeIcon, UsersRound } from "lucide-react";

const useRoutes = () => {
    const pathname = usePathname()

    const routes = useMemo(()=> [
        {
            label: 'Home',
            href: '/',
            icon: HomeIcon,
            active: pathname === '/'
        },
        {
            label: 'Activity',
            href: '/activity',
            icon: Bell,
            active: pathname === '/activity'
        },
        {
            label: 'Organizaciones',
            href: '/org',
            icon: UsersRound,
            active: pathname === '/organizations'
        },
        {
            label: 'Meet',
            href: '/meet',
            icon: Headset,
            active: pathname === '/meet'
        }
    ], [pathname])
    
    return routes
}

export default useRoutes