import { AlertColor } from "@mui/lab";
import { PermissionsQueryResponse } from "src/services/permission/models";

export interface CreatePermissionDialogProps {
  onClose: () => void,
  open: boolean,
  isEditPermission: boolean,
  editPermission?: PermissionsQueryResponse
};

export interface PermissionDialogFormViewValues {
  employeeForename: string;
  employeeSurname: string;
  permissionTypeId: number;
};

export interface PermissionDialogAlert {
  visible: boolean;
  message: string;
  type: AlertColor;
  title: string;
};