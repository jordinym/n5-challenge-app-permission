import { useQuery } from "react-query"
 
import { getPermissionsApiCall } from "src/services"
import { PermissionsQueryResponse } from "src/services/permission/models/permissions-query-response";
import { useState } from "react";
import { CreatePermissionDialogProps } from "./props";

export const useCreatePermissionCommandHooks = (props:CreatePermissionDialogProps) => {

  const { onClose } = props; 
 
  const handleClose = () => {
    onClose();
  };

  
    return {
      handleClose
      }
}