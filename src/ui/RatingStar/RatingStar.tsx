import { FC } from 'react';
import { FaStar } from 'react-icons/fa';
import './styles.css';

interface StarRatingProps {
	currentRating: number;
	ratingValue: number;
	hover: number | null;
	onChange: (rating: number) => void;
	onMouseEnter: (rating: number) => void;
	onMouseLeave: () => void;
}

export const RatingStar: FC<StarRatingProps> = ({
	currentRating,
	ratingValue,
	hover,
	onChange,
	onMouseEnter,
	onMouseLeave,
}) => (
	<label data-rating={currentRating}>
		<input
			type='radio'
			name='rating'
			onChange={() => onChange(currentRating)}
		/>
		<FaStar
			className='star'
			size={20}
			color={currentRating <= (hover || ratingValue) ? '#ffc107' : '#e4e5e9'}
			onMouseEnter={() => onMouseEnter(currentRating)}
			onMouseLeave={onMouseLeave}
		/>
	</label>
);
