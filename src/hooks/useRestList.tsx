import { useQuery } from '@tanstack/react-query';
import { Restaurant, getRestaurants } from '../api/api';

interface Response {
	data: Restaurant[] | undefined;
	isError: boolean;
	isLoading: boolean;
}

export const useRestList = (): Response => {
	const { data, isError, isLoading } = useQuery({
		queryKey: ['restaurants'],
		queryFn: getRestaurants,
	});

	return { data, isError, isLoading };
};
