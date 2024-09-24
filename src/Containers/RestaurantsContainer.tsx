import { useEffect, useState } from 'react';
import { useRatingChange } from '../hooks/useRatingChange';
import { useRestList } from '../hooks/useRestList';
import { Loader } from '../ui/Loader/Loader';
import { RestList } from '../ui/RestList/RestList';
import { SearchInput } from '../ui/SearchInput/SearchInput';

export const RestaurantsContainer = () => {
	const { data, isFetching, error } = useRestList();
	const { register } = useRatingChange();
	const [searchString, setSearchString] = useState<string>('');
	const [debouncedValue, setDebouncedValue] = useState<string>('');

	const handleChooseRating = (id: string, rating: number) => {
		register(id, rating);
	};

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebouncedValue(searchString);
		}, 300);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [searchString]);

	const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchString(e.target.value);
	};

	const filteredData = data?.filter(item =>
		item.name.toLowerCase().includes(debouncedValue.toLowerCase())
	);

	if (isFetching) {
		return <Loader />;
	}

	if (error) {
		return <p>Ошибка: {error.message}</p>;
	}

	return (
		<>
			<SearchInput value={searchString} onChange={handleValue} />
			<RestList
				list={filteredData || []}
				onChooseRating={(id: string, rating: number) =>
					handleChooseRating(id, rating)
				}
			/>
		</>
	);
};
