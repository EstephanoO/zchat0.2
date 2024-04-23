import {create} from 'zustand'

type TypeModal = 'createServer' | 'editServer' | 'deleteServer'

interface ModalState {
    type: TypeModal | null
    isOpen: boolean
    onOpen: (type: TypeModal) => void
    onClose: () => void
}

export const useModalState = create<ModalState>((set) => ({
    type: null,
    isOpen: false,
    onOpen: (type) => set({type, isOpen: true}),
    onClose: () => set({isOpen: false}),
}))
