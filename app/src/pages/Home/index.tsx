import { Box, Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import PageTitle from 'src/components/PageTitle';


function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <PageTitleWrapper>
        <PageTitle
          heading=" Home - Permission App"
          subHeading="N5Now Challenge - fullstack developer."
          addButton={false}
        />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" py={5} alignItems="center">
        </Box>
      </Container>
    </>
  );
}

export default Home;
