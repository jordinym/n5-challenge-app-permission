import { useMutation } from "react-query"

import { CreatePermissionDialogProps, PermissionDialogAlert, PermissionDialogFormViewValues } from "./props";
import { postSavePermissionTypeApiCall, putUpdatePermissionTypeApiCall } from "src/services/permission/permission-type-api";
import { CreatePermissionTypeCommandRequest, UpdatePermissionTypeCommandRequest } from "src/services/permission/models";
import { useForm } from "react-hook-form";
import { useState } from "react";


export const useCreatePermissionTypeCommandHooks = (props: CreatePermissionDialogProps) => {
  const { onClose, editPermission, isEditPermission } = props;
  const { register, handleSubmit, reset, formState: { errors } } = useForm<PermissionDialogFormViewValues>(
    {
      defaultValues: {
        description: editPermission?.description
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
    (request: CreatePermissionTypeCommandRequest) => postSavePermissionTypeApiCall(request),
    {
      onSuccess: response => handleSuccessSavePermission(response, "registered"),
      onError: () => handleErrorNotificacion("registering")
    }
  )

  const updatePermissionMutation = useMutation(
    (request: UpdatePermissionTypeCommandRequest) => putUpdatePermissionTypeApiCall(request),
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
        description: permissionFormValues.description,
        id: editPermission?.id ?? 0
      })
    } else {
      await savePermissionMutation.mutate({
        description: permissionFormValues.description,
      })
    }

  };


  return {
    handleClose,
    onSavePermission,
    register,
    handleSubmit,
    errors,
    showAlert
  }
}