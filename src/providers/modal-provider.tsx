'use client'

import { CreateOrgModal } from "@/components/modals/create-org-modal";
import { useState } from "react";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)
    
    if (!isMounted) {
        setIsMounted(true)
    }

  return (
    <>
    <CreateOrgModal/>
    </>
  )
}