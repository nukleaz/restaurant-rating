import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BaseLayout } from './ui/BaseLayout/BaseLayout';

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BaseLayout />
		</QueryClientProvider>
	);
}

export default App;
