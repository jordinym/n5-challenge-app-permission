import { useQuery } from "react-query"
import { getPermissionsApiCall } from "src/services"
import { PermissionsQueryResponse } from "src/services/permission/models/permissions-query-response";
import { useEffect, useState } from "react";
import { PermissionDetailsProps } from "./props";

export const usePermissionQueryHooks = (props: PermissionDetailsProps) => {
  const { open: openCreateDialog } = props;
  const permissionsValue: PermissionsQueryResponse[] = [];
  const [intervalMs, setIntervalMs] = useState(1000)
  const [permissions, setPermissions] = useState([...permissionsValue]);
  const [open, setOpen] = useState(false);
  const [permission, setPermission] = useState<PermissionsQueryResponse>();

  const { isFetching, error, refetch } = useQuery(
    'get-permission-query',
    () => getPermissionsApiCall(),
    {
      retry: 0,
      refetchOnWindowFocus: true,
      onSuccess: data => handleSuccess(data)
    }
  )

  useEffect(() => {
    refetch();
  }, [openCreateDialog]);

  const handleSuccess = (data: PermissionsQueryResponse[]) => {

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

  const handleClickOpen = (permission: PermissionsQueryResponse) => {
    setPermission(permission)
    setOpen(true);
  };

  const handleClose = () => {
    refetch();
    setOpen(false);
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