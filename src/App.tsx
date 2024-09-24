import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BaseLayout } from './ui/BaseLayout/BaseLayout';

const queryClient = new QueryClient();

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<BaseLayout />
		</QueryClientProvider>
	);
};
