import React, { useState } from 'react'
import { Box, Button, Card, CardContent, Dialog, DialogTitle, Divider, Grid, MenuItem, TextField } from '@mui/material'
import { useCreatePermissionCommandHooks } from './hooks'
import { CreatePermissionDialogProps } from './props';

export const CreatePermissionDialog: React.FC<CreatePermissionDialogProps> = (props) => {
  const { handleClose } = useCreatePermissionCommandHooks(props)
  const [currency, setCurrency] = useState('1');
  const label = { inputProps: { 'aria-label': 'Switch demo' } };

  const currencies = [
    {
      value: '1',
      label: 'Administrator'
    },
    {
      value: '2',
      label: 'Vendor'
    },
  ];
  const handleChange = (event: any) => {
    setCurrency(event.target.value);
  };
  return (
    <Dialog onClose={handleClose} open={props.open}>
      <DialogTitle>Register Permission</DialogTitle>

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
                  id="outlined-required"
                  label="Employee Forename"
                />
                <TextField
                  id="outlined-disabled"
                  label="Employee Surname"
                />
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Permission type"
                  value={currency}
                  onChange={handleChange}
                  helperText="Please select permission type"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Button sx={{ margin: 1 }} onClick={handleClose} variant="contained" color="primary">
        Save
      </Button>
    </Dialog>
  )

} 