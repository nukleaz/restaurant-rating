import { FC } from 'react';
import { Restaurant } from '../../api/api';
import { RestCard } from '../RestCard/RestCard';
import './styles.css';

interface RestListProps {
	list: Restaurant[];
	onChooseRating: (id: Restaurant['id'], rating: Restaurant['rating']) => void;
}

export const RestList: FC<RestListProps> = ({ list, onChooseRating }) => {
	return (
		<ul className='restaurants__list'>
			{(list || []).map((item: any) => (
				<RestCard
					id={item.id}
					key={item.id}
					url={item.url}
					name={item.name}
					description={item.description}
					rating={item.rating}
					onChooseRating={onChooseRating}
				/>
			))}
		</ul>
	);
};
