import { useEffect, useState } from 'react';
import { useRestList } from '../hooks/useRestList';
import { Loader } from '../ui/Loader/Loader';
import { SearchInput } from '../ui/SearchInput/SearchInput';
import { RestList } from './RestList';
import './styles.css';

export const RestaurantsPage = () => {
	const { data, isFetching, error } = useRestList();
	const [searchString, setSearchString] = useState<string>('');
	const [debouncedValue, setDebouncedValue] = useState<string>('');

	const handleChooseRating = (id: string) => {
		const chosenRest = data?.find(item => item.id === id);
		console.log(chosenRest);
	};

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setDebouncedValue(searchString);
		}, 400);

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
				onChooseRaiting={handleChooseRating}
			/>
		</>
	);
};
