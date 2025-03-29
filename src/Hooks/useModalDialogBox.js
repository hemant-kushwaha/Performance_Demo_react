
import { useState } from 'react'

export default function useModalDialogBox () {
    const [isOpen,setISOpen] =useState(false);

    return {
        isOpen,
        open : () => setISOpen(true),
        close : () => setISOpen(false)
    }
}