import { useQuery } from '@tanstack/react-query';
import { Restaurant, getRestaurants } from '../api/api';

interface Response {
	data: Restaurant[] | undefined;
	isFetching: boolean;
	error: Error | null;
}

export const useRestList = (): Response => {
	const { data, isFetching, error } = useQuery({
		queryKey: ['restaurants'],
		queryFn: getRestaurants,
	});

	return { data, isFetching, error };
};
