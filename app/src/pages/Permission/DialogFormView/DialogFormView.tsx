import React, { useState } from 'react'
import { Alert, AlertTitle, Box, Button, Card, CardContent, Dialog, DialogTitle, Divider, Grid, MenuItem, Stack, TextField } from '@mui/material'
import { useCreatePermissionCommandHooks } from './hooks'
import { CreatePermissionDialogProps } from './props';

export const CreatePermissionDialog: React.FC<CreatePermissionDialogProps> = (props) => {
  const {
    handleClose,
    handleSubmit,
    onSavePermission,
    register,
    errors,
    showAlert,
    handleChange,
    permissionType,
    permissionTypes
   } = useCreatePermissionCommandHooks(props)
   
  return (
    <Dialog onClose={handleClose} open={props.open}>
      <DialogTitle>Register Permission</DialogTitle>

      <form onSubmit={handleSubmit(onSavePermission)}>
        <Grid item xs={12}>
          <Card>
            <Divider />
            <CardContent>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' }
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    required
                    id="employeeForename"
                    label="Employee Forename"
                    {...register('employeeForename', { required: "This field is required" })}
                    error={!!errors.employeeForename}
                    helperText={errors?.employeeForename?.message}
                  />
                  <TextField
                    id="employeeSurname"
                    label="Employee Surname"
                    {...register('employeeSurname', { required: "This field is required" })}
                    error={!!errors.employeeSurname}
                    helperText={errors?.employeeSurname?.message}
                  />
                  <TextField
                    id="permissionTypeId"
                    select
                    label="Permission type"  
                    {...register('permissionTypeId', { required: "This field is required" })}
                    error={!!errors.permissionTypeId}
                    helperText={errors?.permissionTypeId?.message} 
                    onChange={handleChange} 
                    value={permissionType}
                  >
                    {permissionTypes.map((option) => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.description}
                      </MenuItem>
                    ))}
                  </TextField>

                </div>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Button type="submit" sx={{ margin: 1 }} variant="contained" color="primary">
          Save
        </Button>
        <Button type="button" sx={{ margin: 1 }} onClick={handleClose} variant="contained" color="inherit">
          Cancel
        </Button>
      </form>
      {showAlert.visible && (<Stack sx={{ width: '100%', padding: 1 }} spacing={2}>
        <Alert variant="filled" severity={showAlert.type}>
          <AlertTitle>{showAlert.title}</AlertTitle>
          {showAlert.message}
        </Alert>
      </Stack>)}
      <br />
    </Dialog>
  )

} 