import {
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
    IconButton,
  } from "@mui/material";
import { PermissionTableProps } from "./props";
import { usePermissionQueryHooks } from "./hooks";

export const PermissionTableLayout: React.FC= () => {
    const { permissions, getPermissions} = usePermissionQueryHooks()

    return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell size="small"></TableCell>
            <TableCell size="medium" align="right">
              Nombre
            </TableCell>
            <TableCell size="medium" align="right">
              Fecha
            </TableCell>
            <TableCell size="small" align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {permissions.map((permission) => (
            <TableRow
              key={permission.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell size="small" component="th" scope="row">
                {permission.id}
              </TableCell>
              <TableCell size="medium" align="right">
                {permission.employeeForename} {permission.employeeSurname}
              </TableCell>
              <TableCell size="medium" align="right">
                ummm
              </TableCell> 
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
