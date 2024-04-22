import Sidebar from "@/components/navigation/sidebar"

interface LayoutHomeProps {
    children: React.ReactNode
}

function LayoutHome({
    children
}: LayoutHomeProps) {
  return (
    <div className="flex h-full">
        <Sidebar>
        {children}
</Sidebar>
    </div>
  )
}

export default LayoutHome