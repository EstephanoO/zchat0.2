'use client'

import useRoutes from "@/hooks/useRoutes"
import { useState } from "react"
import { DesktopItem } from "./desktop-item"
import { UserButton } from "@/components/user-button"
import { UserAvatar } from "@/components/user-avatar"
import { User, UserWithPocketApi } from "@/modules/users/auth/user.types"

interface DesktopSidebarProps {
    user: UserWithPocketApi
}

const DesktopSidebar = ({user}: DesktopSidebarProps) => {
    const routes = useRoutes()
    const [isOpen, setIsOpen] = useState(false)

    return  (
        <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 xl:px-6 lg:overflow-y-auto lg:bg-lime-200/50 lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between">
            <nav className="mt-4 flex flex-col justify-between">
                <ul
                role='list'
                className="flex flex-col items-center space-y-1 "
                >
                    <UserAvatar src={user.avatarUrl} className="mb-4"/>
                    {routes.map((route) => (
                        <DesktopItem
                        key={route.label}
                        href={route.href}
                        label={route.label}
                        icon={route.icon}
                        active={route.active}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    )
}
export default DesktopSidebar