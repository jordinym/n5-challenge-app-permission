import { AlertColor } from "@mui/lab";
import { PermissionTypesQueryResponse } from "src/services/permission/models";

export interface CreatePermissionDialogProps {
  onClose: () => void,
  open: boolean,
  isEditPermission: boolean,
  editPermission?: PermissionTypesQueryResponse
};

export interface PermissionDialogFormViewValues {
  description: string;
};

export interface PermissionDialogAlert {
  visible: boolean;
  message: string;
  type: AlertColor;
  title: string;
};