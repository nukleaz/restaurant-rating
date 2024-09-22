import { FC } from 'react';
import { Restaurant } from '../api/api';
import { RestCard } from '../ui/RestCard/RestCard';

interface RestListProps {
	list: Restaurant[];
	onChooseRaiting: (id: Restaurant['id']) => void;
}

export const RestList: FC<RestListProps> = ({ list, onChooseRaiting }) => {
	return (
		<ul className='restaurants__list'>
			{(list || []).map((item: any) => (
				<RestCard
					id={item.id}
					key={item.id}
					url={item.url}
					name={item.name}
					description={item.description}
					raiting={item.raiting}
					onChooseRaiting={onChooseRaiting}
				/>
			))}
		</ul>
	);
};
