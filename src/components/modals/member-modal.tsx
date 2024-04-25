import { useModalState } from "@/hooks/use-modal-store"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import { DialogDescription } from "@radix-ui/react-dialog"
import { ScrollArea } from "../ui/scroll-area"
import { UserAvatar } from "../user-avatar"
import { useOrigin } from "@/hooks/use-origin"

export const MemberModal = () => {
    const { onOpen, isOpen, type, onClose, data} = useModalState()

    const isModalOpen = isOpen && type === 'member' 

    const {server} = data

    const avatar = server?.expand.members.map((member) => member.expand.user.avatar)
    const origin = useOrigin()

    return (
        <Dialog open={isModalOpen} onOpenChange={onClose}>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Administra tus Usuarios
                    </DialogTitle>
                    <DialogDescription
                    className="text-center text-zinc-500"
                    >
                        {server?.expand.members.length} Miembros
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="mt-8 max-h-[420px] pr-6">
                    {server?.expand.members.map((member)=> (
                        <div key={member.id} className="flex items-center gap-x-2 mb-6">
                            <UserAvatar src={`https://maps-org.pockethost.io/api/files/_pb_users_auth_/${member.expand.user.id}/${member.expand.user.avatar}`}/>
                            {member.expand.user.name}
                        </div>
                    ))}
                </ScrollArea> 
            </DialogContent>
        </Dialog>
    )
}