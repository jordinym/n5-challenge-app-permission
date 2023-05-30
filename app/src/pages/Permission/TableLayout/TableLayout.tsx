import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TablePagination,
  TableFooter,
  IconButton,
} from "@mui/material";
import { usePermissionQueryHooks } from "./hooks";
import TablePaginationActions from "@mui/material/TablePagination/TablePaginationActions";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { CreatePermissionDialog } from "../DialogFormView/DialogFormView";
import { PermissionDetailsProps } from "./props";
export const PermissionTableLayout: React.FC<PermissionDetailsProps> = (props) => {
  const {
    permissions,
    handleChangePage,
    handleChangeRowsPerPage,
    rowsPerPage,
    page,
    emptyRows,
    handleClose,
    open,
    handleClickOpen,
    permission
  } = usePermissionQueryHooks(props)

  return (
    <>
      {open && (<CreatePermissionDialog
        open={open}
        onClose={handleClose}
        isEditPermission={true}
        editPermission={permission}
      />

      )}

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell size="small">Code</TableCell>
              <TableCell size="medium"  >
                Employee Forename
              </TableCell>
              <TableCell size="medium"  >
                Employee Surname
              </TableCell>
              <TableCell size="medium"  >
                Permision Type
              </TableCell>
              <TableCell size="medium"  >
                Fecha
              </TableCell>
              <TableCell size="small" align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {(rowsPerPage > 0
              ? permissions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : permissions
            ).map((permission) => (
              <TableRow
                key={permission.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell size="small" component="th" scope="row">
                  {permission.id}
                </TableCell>
                <TableCell size="medium"  >
                  {permission.employeeForename}
                </TableCell>
                <TableCell size="medium"  >
                  {permission.employeeSurname}
                </TableCell>
                <TableCell size="medium"  >
                  {permission.permissionType}
                </TableCell>
                <TableCell size="medium"  >
                  {permission.registrationDate}
                </TableCell>
                <TableCell size="medium" align="center"  >
                  <IconButton aria-label="edit" onClick={() => handleClickOpen(permission)}  >
                    <BorderColorIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}

          </TableBody>
          <TableFooter>
            <TableRow>

              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={6}
                count={permissions.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};
