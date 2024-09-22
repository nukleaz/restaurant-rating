import { FC } from 'react';
import { Restaurant } from '../../api/api';
import './styles.css';

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
		<li className='restaurants__card restaurant'>
			<img className='restaurant__img' src={url} alt='Фото ресторана' />
			<h3 className='restaurant__title'>{name}</h3>
			<p className='restaurant__descr'>{description}</p>
			<button onClick={handleButtonClick} className='restaurant__btn'></button>
		</li>
	);
};
