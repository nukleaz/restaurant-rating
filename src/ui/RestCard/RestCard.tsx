import { FC, useState } from 'react';
import { Restaurant } from '../../api/api';
import { RatingStar } from '../RatingStar/RatingStar';
import './styles.css';

export interface RestCardProps extends Restaurant {
	onChooseRating: (id: string, rating: number) => void;
}

export const RestCard: FC<RestCardProps> = ({
	id,
	name,
	description,
	rating,
	url,
	onChooseRating,
}) => {
	const [ratingValue, setRatingValue] = useState<number>(rating);
	const [hover, setHover] = useState<number | null>(null);

	const handleRatingChange = (currentRating: number) => {
		setRatingValue(currentRating);
		onChooseRating(id, currentRating);
	};

	return (
		<li className='restaurants__card restaurant'>
			<img className='restaurant__img' src={url} alt='Фото ресторана' />
			<h3 className='restaurant__title'>{name}</h3>
			<p className='restaurant__descr'>{description}</p>
			{[...Array(5)].map((_, index) => {
				const currentRating: number = index + 1;
				return (
					<RatingStar
						key={index}
						currentRating={currentRating}
						ratingValue={ratingValue}
						hover={hover}
						onChange={handleRatingChange}
						onMouseEnter={setHover}
						onMouseLeave={() => setHover(null)}
					/>
				);
			})}
		</li>
	);
};
