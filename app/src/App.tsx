import { useRoutes } from 'react-router-dom'; 
import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import router from './router/router';
function App() {
  const content = useRoutes(router);

  return (
    <ThemeProvider> 
        <CssBaseline />
        {content} 
    </ThemeProvider>
  );
}
export default App;
