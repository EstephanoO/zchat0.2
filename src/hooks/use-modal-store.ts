import { Organization } from '@/modules/org/org.type'
import {create} from 'zustand'

type TypeModal = 'createServer' | 'editServer' | 'deleteServer' | 'invite' | 'createMeet'

interface ModalData {
    servers? : Organization[]
}



interface ModalState {
    type: TypeModal | null
    data: ModalData
    isOpen: boolean
    onOpen: (type: TypeModal, data?: ModalData) => void
    onClose: () => void
}

export const useModalState = create<ModalState>((set) => ({
    type: null,
    data: [],
    datas: { servers: [] }, // Inicializa datas como un objeto con la propiedad servers que es un array vacío
    isOpen: false,
    onOpen: (type, data = {}) => set({type, isOpen: true, data}),
    onClose: () => set({isOpen: false}),
}))
