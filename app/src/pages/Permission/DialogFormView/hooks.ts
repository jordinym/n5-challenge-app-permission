import { useMutation } from "react-query"

import { CreatePermissionDialogProps, PermissionDialogAlert, PermissionDialogFormViewValues } from "./props";
import { postSavePermissionApiCall, putUpdatePermissionApiCall } from "src/services/permission/permission-api";
import { CreatePermissionCommandRequest, UpdatePermissionCommandRequest } from "src/services/permission/models";
import { useForm } from "react-hook-form";
import { useState } from "react";


export const useCreatePermissionCommandHooks = (props: CreatePermissionDialogProps) => {
  const { onClose, editPermission, isEditPermission } = props;
  const [permissionType, setPermissionType] = useState('1');
  const { register, handleSubmit, reset, formState: { errors } } = useForm<PermissionDialogFormViewValues>(
    {
      defaultValues: {
        employeeForename:editPermission?.employeeForename,
        employeeSurname: editPermission?.employeeSurname,
        permissionTypeId: editPermission?.permissionTypeId ?? 1
      }
    }
  );
  const [showAlert, setShowAlert] = useState<PermissionDialogAlert>(
    {
      message: '',
      visible: false,
      type: 'success',
      title: 'Success'
    });

  const savePermissionMutation = useMutation(
    (request: CreatePermissionCommandRequest) => postSavePermissionApiCall(request),
    {
      onSuccess: response => handleSuccessSavePermission(response, "registered"),
      onError: () => handleErrorNotificacion("registering")
    }
  )

  const updatePermissionMutation = useMutation(
    (request: UpdatePermissionCommandRequest) => putUpdatePermissionApiCall(request),
    {
      onSuccess: response => handleSuccessSavePermission(response, "updated"),
      onError: () => handleErrorNotificacion("updating")
    }
  )

  const handleClose = () => {
    reset();
    onClose();
  };

  const handleSuccessSavePermission = (response: number, message: string) => {
    setShowAlert({
      message: `Permission request ${message} successfully!`,
      visible: true,
      type: 'success',
      title: 'Success'
    })
    setTimeout(() => {
      reset();
      setShowAlert({
        message: `Error ${message} permission request!`,
        visible: false,
        type: 'error',
        title: 'Error'
      })
      onClose();
    }, 700);
  };

  const handleErrorNotificacion = (message: string) => {
    setShowAlert({
      message: `Error ${message} permission request!`,
      visible: true,
      type: 'error',
      title: 'Error'
    })
  };

  const onSavePermission = async (permissionFormValues: PermissionDialogFormViewValues) => {
    if (isEditPermission) {
      await updatePermissionMutation.mutate({
        employeeForename: permissionFormValues.employeeForename,
        employeeSurname: permissionFormValues.employeeSurname,
        permisionTypeId: permissionFormValues.permissionTypeId,
        id: editPermission?.id ?? 0
      })
    } else {
      await savePermissionMutation.mutate({
        employeeForename: permissionFormValues.employeeForename,
        employeeSurname: permissionFormValues.employeeSurname,
        permisionTypeId: permissionFormValues.permissionTypeId
      })
    }

  };

  const handleChange = (event:any) => {
    setPermissionType(event.target.value)
  };


  return {
    handleClose,
    onSavePermission,
    register,
    handleSubmit,
    errors,
    showAlert,
    handleChange,
    permissionType
  }
}