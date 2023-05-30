import { useQuery } from "react-query"
import { getPermissionTypesApiCall } from "src/services"
import { useEffect, useState } from "react";
import { PermissionTypesQueryResponse } from "src/services/permission/models";
import { PermissionTypeDetailsProps } from "./props";

export const usePermissionTypeQueryHooks = (props: PermissionTypeDetailsProps) => {

  const { open: openCreateDialog } = props;
  const permissionsValue: PermissionTypesQueryResponse[] = [];
  const [intervalMs, setIntervalMs] = useState(1000)
  const [permissions, setPermissions] = useState([...permissionsValue]);
  const [open, setOpen] = useState(false);
  const [permission, setPermission] = useState<PermissionTypesQueryResponse>();

  const { isFetching, error, refetch } = useQuery(
    'get-permission-type-query',
    () => getPermissionTypesApiCall(),
    {
      retry: 0,
      refetchOnWindowFocus: true,
      onSuccess: data => handleSuccess(data)
    }
  )

  useEffect(() => {
    refetch();
  }, [openCreateDialog]);
  
  const handleSuccess = (data: PermissionTypesQueryResponse[]) => {

    setPermissions(data)
  }

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - permissions.length) : 0;

  const handleClickOpen = (permission: PermissionTypesQueryResponse) => {
    setPermission(permission)
    setOpen(true);
  };

  const handleClose = () => {
    refetch();
    setOpen(false);
  };

  const dataRefresh = () => {
    refetch();
  };


  return {
    permissions,
    handleChangePage,
    handleChangeRowsPerPage,
    rowsPerPage,
    page,
    emptyRows,
    handleClickOpen,
    handleClose,
    open,
    permission
  }
}