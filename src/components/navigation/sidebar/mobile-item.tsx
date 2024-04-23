import { LucideIcon } from "lucide-react"

interface MobileItemProps {
    active: boolean
    href: string
    icon: LucideIcon 
    label: string
}

export const MobileItem = ({
  active,
  href,
  icon: Icon,
  label
}: MobileItemProps) => {
  return (
    <div>MobileItem</div>
  )
}
