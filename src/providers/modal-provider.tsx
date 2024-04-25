'use client'

import { CreateMeetModal } from "@/components/modals/create-meet";
import { CreateOrgModal } from "@/components/modals/create-org-modal";
import { InviteModal } from "@/components/modals/invite-modal";
import { useState } from "react";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)
    
    if (!isMounted) {
        setIsMounted(true)
    }

  return (
    <>
    <CreateOrgModal/>
    <InviteModal />
    <CreateMeetModal />
    </>
  )
}