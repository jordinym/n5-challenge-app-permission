import React from 'react'
import { PermissionTypeTableLayout } from './TableLayout'
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageTitle from 'src/components/PageTitle';
import Footer from 'src/components/Footer';

import {
  Container,
  Card,
  CardHeader,
  CardContent,
  Divider
} from '@mui/material';
import { usePermissionHooks } from './hooks';
import { CreatePermissionDialog } from './DialogFormView/DialogFormView';



const ConsultPermissionType: React.FC = () => {
  const { handleClickOpen, handleClose, open } = usePermissionHooks()
  return (
    <>
      <Helmet>
        <title>Permission Type</title>
      </Helmet>
      <PageTitleWrapper>
        <PageTitle
          heading="PermissionTypes"
          subHeading="Lists information"
          handleClick={handleClickOpen}
          addButton={true}
        />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Card>
          <CardHeader title="Search Results" />
          <Divider />
          <CardContent>
            {open && (<CreatePermissionDialog
              open={open}
              onClose={handleClose}
              isEditPermission={false}
            />)}
            <PermissionTypeTableLayout
             open={open}
            />
          </CardContent>
        </Card>
      </Container>
      <Footer />
    </>
  )
}

export default ConsultPermissionType;