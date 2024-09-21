import { FC } from 'react';
import { Restaurant } from '../../api/api';

export interface RestCardProps extends Restaurant {
	onChooseRaiting: (id: string) => void;
}

export const RestCard: FC<RestCardProps> = ({
	id,
	name,
	description,
	raiting,
	url,
	onChooseRaiting,
}) => {
	const handleButtonClick = () => onChooseRaiting(id);
	return (
		<div className='restaurants__card restaurant'>
			<img src={url} alt='Фото ресторана' />
			<h3 className='restaurant__title'>{name}</h3>
			<p className='restaurant__descr'>{description}</p>
			<button onClick={handleButtonClick} className='restaurant__btn'></button>
		</div>
	);
};
