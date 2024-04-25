import { MeetSidebar } from "./component/meet-sidebar"

async function MeetLayout({children}:{children:React.ReactNode}) {
  

  return (
    <div className="h-full">
         <div className="hidden md:flex h-full w-72 z-20 flex-col fixed inset-y-0">
            <MeetSidebar />
         </div>
         <main className="h-full md:pl-72">
        {children}
        </main>
    </div>
  )
}

export default MeetLayout