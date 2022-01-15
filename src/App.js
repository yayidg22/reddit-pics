import { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/header/Header';
import Home from './views/home/Home';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtoolsPanel  } from 'react-query/devtools'

const queryClient = new QueryClient()

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <Header />
        <Home />
        <ReactQueryDevtoolsPanel  />
      </QueryClientProvider>
    </Fragment>
  );
}

export default App;
