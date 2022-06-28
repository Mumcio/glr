import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import LocationView from './views/location/LocationView';
import './App.css';

const threeHoursInMs = 1000 * 60 * 60 * 3;
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: threeHoursInMs,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <LocationView />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
