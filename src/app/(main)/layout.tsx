import Sidebar from "@/components/navigation/sidebar"
import { ModalProvider } from "@/providers/modal-provider"

function LayoutHome({children}:{children:React.ReactNode}) {
  return (
    <div className="h-full">
    <div className='hidden md:flex h-full w-[82px]
        z-30 flex-col fixed inset-y-0'>
          <Sidebar />
          </div>
          <main className='md:pl-[82px] h-full'>
            <ModalProvider />
           {children} 
          </main>
        </div>
  )
}

export default LayoutHome