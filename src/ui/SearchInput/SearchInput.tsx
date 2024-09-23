import { FC } from 'react';
import './styles.css';

interface SearchInputProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: FC<SearchInputProps> = ({ value, onChange }) => {
	return (
		<input
			className='search-input'
			onChange={onChange}
			value={value}
			placeholder='Search for restaurants'
		/>
	);
};
