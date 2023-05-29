import { useState } from "react";

export const usePermissionHooks = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        console.log("jordiny")
        setOpen(false);
    };

    return {
        handleClickOpen,
        handleClose,
        open
    }
}