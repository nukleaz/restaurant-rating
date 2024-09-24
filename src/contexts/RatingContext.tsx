import { createContext, useState } from 'react';

interface ContextProps {
	ratingValue: number | null;
	setRatingValue: (raitingValue: number) => void;
}

export const RatingContext = createContext<ContextProps>({
	ratingValue: null,
	setRatingValue: () => {},
});

export const RatingProvider = ({ children }: any) => {
	const [ratingValue, setRatingValue] = useState<number>(0);

	return (
		<RatingContext.Provider value={{ ratingValue, setRatingValue }}>
			{children}
		</RatingContext.Provider>
	);
};
