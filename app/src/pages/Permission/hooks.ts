import { useState } from "react";

export const usePermissionHooks = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => { 
        setOpen(false);
    };

    return {
        handleClickOpen,
        handleClose,
        open
    }
}