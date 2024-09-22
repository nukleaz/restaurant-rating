import { useRestList } from '../hooks/useRestList';
import { RestList } from './RestList';
import './styles.css';

export const RestaurantsPage = () => {
	const { data, isLoading } = useRestList();

	const handleChooseRating = (id: string) => {
		const chosenRest = data?.find(item => item.id === id);
		console.log(chosenRest);
	};

	if (isLoading) {
		return (
			<div>
				<p>Пожалуйста, подождите</p>
				<p>Номера доступные для бронирования скоро появятся здесь</p>
			</div>
		);
	}

	return <RestList list={data || []} onChooseRaiting={handleChooseRating} />;
};
