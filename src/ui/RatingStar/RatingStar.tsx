import { FC } from 'react';
import { FaStar } from 'react-icons/fa';

interface RatingStarProps {
	rating: number;
	hoverRating: number | null;
	onChange: (rating: number) => void;
	// onClick: (rating: number) => void;
	onMouseEnter: (rating: number) => void;
	onMouseLeave: () => void;
}

export const RatingStar: FC<RatingStarProps> = ({
	rating,
	hoverRating,
	onChange,
	// onClick,
	onMouseEnter,
	onMouseLeave,
}) => {
	return (
		<label>
			<input
				type='radio'
				name='rating'
				onChange={() => onChange(rating)}
				// onClick={() => onClick(rating)}
				data-rating={rating}
			/>
			<FaStar
				className='star'
				size={20}
				color={rating <= (hoverRating || rating) ? '#ffc107' : '#e4e5e9'}
				onMouseEnter={() => onMouseEnter(rating)}
				onMouseLeave={onMouseLeave}
			/>
		</label>
	);
};
