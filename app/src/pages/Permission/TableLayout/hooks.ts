import { useQuery } from "react-query"
import { PermissionTableProps } from "./props"
import { getPermissionsApiCall } from "src/services"
import { PermissionsQueryResponse } from "src/services/permission/models/permissions-query-response";
import { useState } from "react";

export const usePermissionQueryHooks = () => {

  const permissionsValue:PermissionsQueryResponse[]=[]; 
  const [intervalMs, setIntervalMs] = useState(1000)
  const [permissions, setPermission] = useState([...permissionsValue]);

  const { isFetching, error, refetch} = useQuery(
    'get-permission-query',
    () => getPermissionsApiCall(),
    {
      retry: 0,
      refetchOnWindowFocus: false, 
      onSuccess: data => setPermission(data)
    }
  )
   
    const getPermissions= ():PermissionsQueryResponse[] =>{
  
      return permissions;
    } 
    return {
        getPermissions,
        permissions 
      }
}