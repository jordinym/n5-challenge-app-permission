import { PermissionsQueryResponse } from "src/services/permission/models/permissions-query-response";

 export interface PermissionTableProps  {
    permissions: PermissionsQueryResponse[]; 
  };

  export interface PermissionTypeDetailsProps {
    open:boolean,
  };