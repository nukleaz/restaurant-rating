import { FC, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { Restaurant } from '../../api/api';
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

	const handleRatingChange = (e: any) => {
		const currentRating: number = e.target.parentNode.dataset.rating;
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
					<label key={index} data-rating={currentRating}>
						<input
							type='radio'
							name='rating'
							onChange={handleRatingChange}
							onClick={() => setRatingValue(currentRating)}
						/>
						<FaStar
							className='star'
							size={20}
							color={
								currentRating <= (hover || ratingValue) ? '#ffc107' : '#e4e5e9'
							}
							onMouseEnter={() => setHover(currentRating)}
							onMouseLeave={() => setHover(null)}
						/>
					</label>
				);
			})}
		</li>
	);
};
