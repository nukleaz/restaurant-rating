import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateRestaurantRating } from '../api/api';

export const useRatingChange = () => {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: updateRestaurantRating,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['restaurants', 'id'] });
		},
	});

	const register = (id: string, rating: number) => {
		mutation.mutate({ id, rating });
	};

	return { register };
};
