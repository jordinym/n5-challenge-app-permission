import { Box, Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageTitle from 'src/components/PageTitle';

const ConsultPermissionType: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Permission Type</title>
      </Helmet>
      <PageTitleWrapper>
        <PageTitle
          heading="Permission Type"
          subHeading="List information"
          addButton={true}
        />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" py={5} alignItems="center">
          sdfsdfsd
        </Box>
      </Container>
    </>
  )
}

export default ConsultPermissionType;
