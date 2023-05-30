import React, { useState } from 'react'
import { Alert, AlertTitle, Box, Button, Card, CardContent, Dialog, DialogTitle, Divider, Grid, MenuItem, Stack, TextField } from '@mui/material'
import { useCreatePermissionTypeCommandHooks } from './hooks'
import { CreatePermissionDialogProps } from './props';

export const CreatePermissionDialog: React.FC<CreatePermissionDialogProps> = (props) => {
  const {
    handleClose,
    handleSubmit,
    onSavePermission,
    register,
    errors,
    showAlert} = useCreatePermissionTypeCommandHooks(props)
   
  return (
    <Dialog onClose={handleClose} open={props.open}>
      <DialogTitle>Register Permission Type</DialogTitle>

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
                    id="description"
                    label="Description"
                    {...register('description', { required: "This field is required" })}
                    error={!!errors.description}
                    helperText={errors?.description?.message}
                  /> 

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